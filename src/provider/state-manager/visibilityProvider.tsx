import React, {useReducer} from 'react'
import {Action, VisibilityContextModel } from '@model'



const VisibilityContext = React.createContext<VisibilityContextModel>({})

const VisibilityReducer = (state: any, action: Action<boolean>) => {
    switch(action.type){
        case "toggle-create-post":
            return {...state, isCreatePost: action.payload}
    }
}

export const VisibilityProvider = (props: any) => {
    const [state, dispatch] = useReducer(VisibilityReducer, {
        isCreatePost: false
    })

    async function toggledCreatePost (data: boolean) {
        await dispatch({type: "toggle-create-post", payload: data})
    }

    return (
        <VisibilityContext.Provider value={{visibility: state, toggledCreatePost}} >
            {props.children}
        </VisibilityContext.Provider>
    )
}

export default VisibilityContext