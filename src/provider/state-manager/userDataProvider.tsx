import React, { useReducer, useContext } from 'react'
import { Action, AppMode, UserData } from '@model'
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
        token: ''
    })
    
    const {theme} = useContext(ThemeContext)
    const {loader} = useContext(VisibilityContext)

    async function signUp (params: UserData, navigation: any) {
        try {
            loader(true)
            const response = await APICaller.post(route.CREATE_USER, params)
            loader(false)
            console.log({response: response.data.data.userData})
        }
        catch (err) {
            loader(false)
            console.log({err})
            helpers.showNotification('danger', 'Error Occured', 'Something went wrong. Kindly check your network', theme)
        }
    }

    async function searchFamily (params: UserData, navigation: any) {
        var searchedFamilies = []
        const phoneNumbers: string[] = helpers.getSearchPhoneNumbers(params)
        console.log({params})

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
                //signUp({...state.userData, familyId: searchedFamilies[0].familyData._id}, navigation)
            }
            else return navigation.navigate('FamilyDetails')
        }
        catch (err) {
            loader(false)
            console.log({err})
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
        else updateSignUpData({ profilePicture: imageUrl })
    }

    const stateActions = {
        signUp,
        updateSignUpData,
        uploadPicture,
        searchFamily
    }

    return (
        <UserContext.Provider value={{user: state, ...stateActions}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext