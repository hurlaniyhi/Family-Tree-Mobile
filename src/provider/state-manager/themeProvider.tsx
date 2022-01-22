import React, {useReducer} from 'react'
import { LightTheme } from '@src/provider/config/theme'
import { AppTheme, ContextTheme, AppMode, Action } from '@model'
import helpers from '@src/utility/helper'


const ThemeContext = React.createContext<ContextTheme | any>({})

const ThemeReducer = (state: AppMode, action: Action<any>) => {
    switch(action.type){
        case "switch-theme":
            return {...state, ...action.payload}
        case "switch-mode":
            return action.payload
    }
}

export const ThemeProvider = (props: any) => {
    const [state, dispatch] = useReducer(ThemeReducer, {
        ...LightTheme
    })

    async function switchTheme(themeData: AppTheme){
        await dispatch({type: "switch-theme", payload: themeData})
    }

    async function switchMode(mode: string){
        const data = helpers.sortMode_Theme(mode, state)
        await dispatch({type: "switch-mode", payload: data})
    }

    return (
        <ThemeContext.Provider value={{theme: state, switchTheme, switchMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext