import React, {useReducer} from 'react'
import { DarkTheme, LightTheme } from '@src/provider/confg/theme'
import { AppTheme, ContextTheme } from '@model'
import helpers from '@src/utility/helper'


const ThemeContext = React.createContext<ContextTheme | any>({})

const ThemeReducer = (state: any, action: any) => {
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
        let data: any = helpers.getLogoImage(state.THEME_MODE, themeData)
        data = {...themeData, LOGO_IMAGE: data.LOGO_IMAGE}
        await dispatch({type: "switch-theme", payload: data})
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