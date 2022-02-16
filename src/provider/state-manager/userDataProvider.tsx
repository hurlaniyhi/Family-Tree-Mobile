import React, { useReducer, useContext } from 'react'
import { Action, AppMode, FamilyData, UserData } from '@model'
import { initialState, route, constant, ResponseCode } from '@src/provider/config/constant'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import helpers from '@src/utility/helper'
import APICaller from '@src/provider/call-service/requestInterceptor'
import { AsyncStorage } from 'react-native'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'


const UserContext = React.createContext<any>(null)

const UserReducer = (state: any, action: Action<any>) => {
    switch(action.type){
        case "update-user-data":
            return { ...state, userData: {...state.userData, ...action.payload} }
        case "set-property-completely": 
            return { ...state, [action.payload.key]: action.payload.value }
    }
}

export const UserProvider = (props: any) => {
    const [state, dispatch] = useReducer(UserReducer, {
        userData: { ...initialState.SIGN_UP },
        familyDetails: { ...initialState.FAMILY_DETAILS },
        familyMembers: [],
        searchedFamilies: [],
        searchedUsers: [],
        token: ''
    })
    
    const {theme} = useContext(ThemeContext)
    const {loader} = useContext(VisibilityContext)

    async function signUp (params: UserData, navigation: any, familyId: string) {
        const payload = { ...params, familyId}
        try {
            loader(true)
            const response = await APICaller.post(route.CREATE_USER, payload)
            loader(false)

            if(response.data.responseCode === ResponseCode.SUCCESS) {
                await dispatch({type: "set-property-completely", payload: {key: 'userData', value: response.data.data.userData}})
                await dispatch({type: "set-property-completely", payload: {key: 'familyDetails', value: response.data.data.familyData}})
                await dispatch({type: "set-property-completely", payload: {key: 'familyMembers', value: response.data.data.familyMembers}})
                await dispatch({type: "set-property-completely", payload: {key: 'token', value: response.data.token}})
                await dispatch({type: "set-property-completely", payload: {key: 'searchedFamilies', value: []}})
                navigation.navigate('Dashboard')
            }
            else {
                helpers.showNotification('danger', 'Failed!', response.data.responseDescription, theme)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function signIn (params: any, navigation: any) {
        try {
            loader(true)
            const response = await APICaller.post(route.LOGIN, params)
            loader(false)

            if(response.data.responseCode === ResponseCode.SUCCESS) {
                await dispatch({type: "set-property-completely", payload: {key: 'userData', value: response.data.data.userData}})
                await dispatch({type: "set-property-completely", payload: {key: 'familyDetails', value: response.data.data.familyData}})
                await dispatch({type: "set-property-completely", payload: {key: 'familyMembers', value: response.data.data.familyMembers}})
                await dispatch({type: "set-property-completely", payload: {key: 'token', value: response.data.token}})
                await dispatch({type: "set-property-completely", payload: {key: 'searchedFamilies', value: []}})
                navigation.navigate('Dashboard')
            }
            else {
                helpers.showNotification('danger', 'Failed!', response.data.responseDescription, theme)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', `Something went wrong. ${err}`, theme)
        }
    }

    async function searchFamilyByPhoneNumber (params: UserData, navigation: any) {
        var searchedFamilies = []
        const phoneNumbers: string[] = helpers.getSearchPhoneNumbers(params)

        loader(true)
        try {
            for (let number of phoneNumbers) {
                const payload = { phoneNumber: number, searchType: constant.SEARCHFAMILY_PHONENUMBER }
                const response = await APICaller.post(route.SEARCH_FAMILY, payload)
    
                if (response.data.responseCode === ResponseCode.SUCCESS) 
                    searchedFamilies.push(response.data.data)
            }
            loader(false)

            if(searchedFamilies.length > 0) {
                searchedFamilies = helpers.removeFamilyDataDuplicate(searchedFamilies)
                await dispatch({type: "set-property-completely", payload: {key: 'searchedFamilies', value: searchedFamilies}})
                return navigation.navigate("Others", {screen: 'SearchPage'})
            }
            else return navigation.navigate('FamilyDetails')
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function searchFamilyByDetails (params: FamilyData, navigation: any) {
        var searchedFamilies: any;
        loader(true)
        try{
            const payload = { ...params, searchType: constant.SEARCHFAMILY_FAMILYDETAILS }
            const response = await APICaller.post(route.SEARCH_FAMILY, payload)
            loader(false)
    
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                searchedFamilies = helpers.restructureFamilySearchResponse(response.data.data.familiesData) 
                await dispatch({type: "set-property-completely", payload: {key: 'searchedFamilies', value: searchedFamilies}})
                return navigation.navigate("Others", {screen: 'SearchPage'})
            }
            else {
               createFamily(params, navigation)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function searchFamilyByFamilyName (familyName: string) {
        var searchedFamilies: any;
        loader(true)
        try{
            const payload = { familyName, searchType: constant.SEARCHFAMILY_NAME_HOMETOWN }
            const response = await APICaller.post(route.SEARCH_FAMILY, payload)
            loader(false)
    
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                searchedFamilies = helpers.restructureFamilySearchResponse(response.data.data.familiesData) 
                await dispatch({type: "set-property-completely", payload: {key: 'searchedFamilies', value: searchedFamilies}})
            }
            else {
                helpers.showNotification('info', 'Not Found!', 'No Family found with this name', theme)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function searchUserFamilyByUserName (userName: string) {
        loader(true)
        try{
            const payload = { userName, searchType: constant.SEARCHFAMILY_USERNAME }
            const response = await APICaller.post(route.SEARCH_FAMILY, payload)
            loader(false)
    
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                await dispatch({type: "set-property-completely", payload: {key: 'searchedUsers', value: response.data.data}})
            }
            else {
                helpers.showNotification('info', 'Not Found!', 'No User found with this name', theme)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function createFamily (params: FamilyData, navigation: any) {
        try {
            loader(true)
            const response = await APICaller.post(route.CREATE_FAMILY, params)
            loader(false)

            if (response.data.responseCode === ResponseCode.SUCCESS) {
                await signUp(state.userData, navigation, response.data.data._id)
            }
            else return helpers.showNotification('danger', 'Failed!', response.data.responseDescription, theme)
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }
    
    async function updateSignUpData (payload: any) {
        await dispatch({type: "update-user-data", payload})
    }

    async function uploadPicture () {
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });
          
        if (image.cancelled) {
            return;
        }

        const fileInfo = await FileSystem.getInfoAsync(image.uri)
        if (fileInfo?.size! > constant.MAX_FILE_SIZE) {
            return helpers.showNotification('danger', 'Invalid Picture', 'Profile picture should not exceed 2MB', theme)
        }
        
        loader(true)
        const imageUrl = await helpers.imageUpload(image.base64)
        loader(false)

        if(!imageUrl) 
            return helpers.showNotification('danger', 'Picture Error', 'Profile picture could not be uploaded. kindly check your network', theme)
        else return imageUrl
    }

    async function sendOtp (email: string, emailType: string) {
        const payload = {email, emailType}
        try {
            loader(true)
            const response = await APICaller.post(route.SEND_OTP, payload)
            loader(false)

            if(response.data.responseCode != ResponseCode.SUCCESS) {
                helpers.showNotification('danger', 'Failed!', 'Invalid email address', theme)
            }
            return response.data.token
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    } 

    async function changePassword (payload: any, navigation: any) {
        try {
            loader(true)
            const response = await APICaller.post(route.CHANGE_PASSWORD, payload)
            loader(false)

            if(response.data.responseCode === ResponseCode.SUCCESS) {
                helpers.showNotification('success', 'Password Changed!', "Password has been successfully changed", theme)
            }
            else {
                helpers.showNotification('danger', 'Failed!', response.data.responseDescription, theme)
            }
            return navigation.navigate('SignIn')
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
            return navigation.navigate('SignIn')
        }
    }

    async function editUser (params: UserData, navigation: any) {
        try {
            loader(true)
            const response = await APICaller.post(route.EDIT_USER, params)
            loader(false)

            if(response.data.responseCode === ResponseCode.SUCCESS) {
                helpers.showNotification('success', 'Success', "User successfully updated", theme)
                await dispatch({type: "set-property-completely", payload: {key: 'userData', value: response.data.data}})
                navigation.navigate('Dashboard')
            }
            else {
                helpers.showNotification('danger', 'Failed!', response.data.responseDescription, theme)
            }
        }
        catch (err) {
            loader(false)
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    const stateActions = {
        signUp,
        signIn,
        updateSignUpData,
        uploadPicture,
        searchFamilyByPhoneNumber,
        searchFamilyByDetails,
        createFamily,
        sendOtp, 
        changePassword,
        editUser,
        searchFamilyByFamilyName,
        searchUserFamilyByUserName
    }

    return (
        <UserContext.Provider value={{user: state, ...stateActions}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext