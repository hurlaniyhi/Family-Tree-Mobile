import React, {useReducer} from 'react'

interface AppTheme {
    theme: {color: string},
    switchTheme: (themeType: string) => void
}

const ThemeContext = React.createContext<AppTheme|any>({theme: {color: 'pink'}})

const ThemeReducer = (state: any, action: any) => {
    switch(action.type){
        case "switch-theme":
            return {...state, color: action.payload}
    }
}

export const ThemeProvider = (props: any) => {
    const [state, dispatch] = useReducer(ThemeReducer, {
        color: "pink"
    })

    async function switchTheme(themeType: string){
        await dispatch({type: "switch-theme", payload: themeType})
    }

    return (
        <ThemeContext.Provider value={{theme: state, switchTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext