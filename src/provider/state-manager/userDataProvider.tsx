import React, { useReducer } from 'react'
import { Action } from '@model'


const UserContext = React.createContext<any>(null)

const UserReducer = (state: any, action: Action<boolean>) => {
    switch(action.type){
        case "toggle-create-post":
            return {...state, isCreatePost: action.payload }
    }
}

export const UserProvider = (props: any) => {
    const [state, dispatch] = useReducer(UserReducer, {
        isCreatePost: false
    })

    async function toggleCreatePost (data: boolean) {
        await dispatch({type: "toggle-create-post", payload: data})
    }

    const stateActions = {
        toggleCreatePost
    }

    return (
        <UserContext.Provider value={{visibility: state, ...stateActions}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext