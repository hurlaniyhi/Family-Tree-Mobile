import React, { useReducer } from 'react'
import { Action } from '@model'
import { initialState } from '@src/provider/config/constant'


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

    const stateActions = {
        signUp,
        updateSignUpData
    }

    return (
        <UserContext.Provider value={{user: state, ...stateActions}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext