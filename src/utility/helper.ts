import { AppMode, AppTheme } from '@model'
import { DarkTheme, LightTheme, Green, Purple, Yellow, Pink} from '@src/provider/config/theme'
import { ImageSourcePropType } from 'react-native'

const sortMode_Theme = (mode: string, themeData: AppTheme) => {
    let modeData = mode === 'dark' ? DarkTheme : LightTheme
    themeData.CARD_BACKGROUND = mode === 'dark' ? getCardColor(themeData.THEME) : themeData.CARD_BACKGROUND
    const theme = { 
        FOCUS_THEME_COLOR: themeData.FOCUS_THEME_COLOR, 
        FOCUS_THEME_COLOR_LIGHT: themeData.FOCUS_THEME_COLOR_LIGHT,
        CARD_BACKGROUND: themeData.CARD_BACKGROUND,
        THEME: themeData.THEME
    }
    //console.log({theme})
    return { ...modeData,  ...theme}
}

const logoImage = (theme: AppMode): ImageSourcePropType => {
    if (theme.THEME === 'purple') {
        return theme.THEME_MODE === 'dark' ? 
            require('@icons/logo-purple-dark.png') :
            require('@icons/logo-purple-light.png')
    }
    else if (theme.THEME === "yellow") {
        return theme.THEME_MODE === 'dark' ? 
            require('@icons/logo-yellow-dark.png') :
            require('@icons/logo-yellow-light.png')
    }
    else if (theme.THEME === "pink") {
        return theme.THEME_MODE === 'dark' ? 
            require('@icons/logo-pink-dark.png') :
            require('@icons/logo-pink-light.png')
    }
    else {
        return theme.THEME_MODE === 'dark' ? 
            require('@icons/logo-green-dark.png') :
            require('@icons/logo-green-light.png')
    }
}

const getCardColor = (theme: string): string => {
    if (theme === 'purple') return Purple.CARD_BACKGROUND
    else if (theme === 'pink') return Pink.CARD_BACKGROUND
    else if (theme === 'yellow') return Yellow.CARD_BACKGROUND
    else return Green.CARD_BACKGROUND
}

export default {
    sortMode_Theme,
    logoImage,
    getCardColor
}