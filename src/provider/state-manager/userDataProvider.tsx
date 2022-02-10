import React, { useReducer } from 'react'
import { Action, AppMode } from '@model'
import { initialState } from '@src/provider/config/constant'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { constant } from '@src/provider/config/constant'
import helpers from '@src/utility/helper'


const UserContext = React.createContext<any>(null)

const UserReducer = (state: any, action: Action<any>) => {
    switch(action.type){
        case "update-user-data":
            return { ...state, userData: {...state.userData, ...action.payload} }
    }
}

export const UserProvider = (props: any) => {
    const [state, dispatch] = useReducer(UserReducer, {
        userData: {...initialState.SIGN_UP}
    })

    async function signUp (data: any) {
        await dispatch({type: "update-user-data", payload: data})
    }
    
    async function updateSignUpData (payload: any) {
        await dispatch({type: "update-user-data", payload})
    }

    async function uploadPicture (theme: AppMode) {
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });
          
        if (image.cancelled) {
            console.log('got here');
            return;
        }

        const fileInfo = await FileSystem.getInfoAsync(image.uri)
        if (fileInfo?.size! > constant.MAX_FILE_SIZE) {
            return helpers.showNotification('danger', 'Invalid Picture', 'Profile picture should not exceed 2MB', theme)
        }

        const imageUrl = await helpers.imageUpload(image.base64)
        if(!imageUrl) 
            return helpers.showNotification('danger', 'Picture Error', 'Profile picture could not be uploaded. kindly check your network', theme)
        else updateSignUpData({ profilePicture: imageUrl })
    }

    const stateActions = {
        signUp,
        updateSignUpData,
        uploadPicture
    }

    return (
        <UserContext.Provider value={{user: state, ...stateActions}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext