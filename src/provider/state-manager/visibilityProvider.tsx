import React, {useReducer} from 'react'
import {Action, VisibilityContextModel } from '@model'



const VisibilityContext = React.createContext<VisibilityContextModel | any>(null)

const VisibilityReducer = (state: any, action: Action<boolean>) => {
    switch(action.type){
        case "toggle-create-post":
            return {...state, isCreatePost: action.payload }
        case "toggle-add-comment": 
            return { ...state, isAddComment: action.payload }
    }
}

export const VisibilityProvider = (props: any) => {
    const [state, dispatch] = useReducer(VisibilityReducer, {
        isCreatePost: false, isAddComment: false
    })

    async function toggledCreatePost (data: boolean) {
        await dispatch({type: "toggle-create-post", payload: data})
    }

    async function toggledAddComment (data: boolean) {
        await dispatch({type: "toggle-add-comment", payload: data})
    }

    const stateActions = {
        toggledCreatePost, 
        toggledAddComment
    }

    return (
        <VisibilityContext.Provider value={{visibility: state, ...stateActions}} >
            {props.children}
        </VisibilityContext.Provider>
    )
}

export default VisibilityContext