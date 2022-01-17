import { AppMode, AppTheme } from '@model'
import { DarkTheme, LightTheme, Green, Purple, Yellow, Pink} from '@src/provider/config/theme'
import { ImageSourcePropType } from 'react-native'
import { icons, images } from '@src/provider/config/constant'

const sortMode_Theme = (mode: string, themeData: AppTheme) => {
    let modeData = mode === 'dark' ? DarkTheme : LightTheme
    themeData.CARD_BACKGROUND = mode === 'dark' ? getCardColor(themeData.THEME) : themeData.CARD_BACKGROUND
    const theme = { 
        FOCUS_THEME_COLOR: themeData.FOCUS_THEME_COLOR, 
        FOCUS_THEME_COLOR_LIGHT: themeData.FOCUS_THEME_COLOR_LIGHT,
        CARD_BACKGROUND: themeData.CARD_BACKGROUND,
        THEME: themeData.THEME
    }
    return { ...modeData,  ...theme }
}

const logoImage = (theme: AppMode): ImageSourcePropType => {
    if (theme.THEME === 'purple') {
        return theme.THEME_MODE === 'dark' ? icons.PURPLE_DARK : icons.PURPLE_LIGHT
    }
    else if (theme.THEME === "yellow") {
        return theme.THEME_MODE === 'dark' ? icons.YELLOW_DARK : icons.YELLOW_LIGHT
    }
    else if (theme.THEME === "pink") {
        return theme.THEME_MODE === 'dark' ? icons.PINK_DARK : icons.PINK_LIGHT
    }
    else {
        return theme.THEME_MODE === 'dark' ? icons.GREEN_DARK : icons.GREEN_LIGHT
    }
}

const getUserIcon = (theme: AppMode): ImageSourcePropType => {
    if (theme.THEME === 'purple') return icons.USER_PURPLE
    else if (theme.THEME === "yellow") return icons.USER_YELLOW
    else if (theme.THEME === "pink") return icons.USER_PINK
    else return icons.USER_GREEN
}

const getCardColor = (theme: string): string => {
    if (theme === 'purple') return Purple.CARD_BACKGROUND
    else if (theme === 'pink') return Pink.CARD_BACKGROUND
    else if (theme === 'yellow') return Yellow.CARD_BACKGROUND
    else return Green.CARD_BACKGROUND
}

const getChatBackground = (theme: AppMode): ImageSourcePropType=> {
    if(theme.THEME_MODE === 'light') return images.CHAT_BACKGROUND_LIGHT
    else return images.CHAT_BACKGROUND_DARK
}

const textToDisplay = (text: string, length: number): string => {
    if (text.length > length) return `${text.substring(0, length-4)}...`
    else return text
}

export default {
    sortMode_Theme,
    logoImage,
    getCardColor,
    getUserIcon,
    textToDisplay,
    getChatBackground
}