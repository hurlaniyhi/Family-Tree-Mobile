import { AppMode, AppTheme } from '@model'
import { DarkTheme, LightTheme } from '@src/provider/confg/theme'

const sortMode_Theme = (mode: string, themeData: AppTheme) => {
    let modeData = mode === 'dark' ? DarkTheme : LightTheme
    modeData = getLogoImage(mode, themeData)
    const theme = { 
        FOCUS_THEME_COLOR: themeData.FOCUS_THEME_COLOR, 
        FOCUS_THEME_COLOR_LIGHT: themeData.FOCUS_THEME_COLOR_LIGHT,
        CARD_BACKGROUND: themeData.CARD_BACKGROUND ?? null
    }
    return { ...modeData,  ...theme}
}

const getLogoImage = (mode: string, theme: AppTheme) => {
    let modeData = mode === 'dark' ? DarkTheme : LightTheme
    modeData.LOGO_IMAGE = mode === 'dark' ? theme.IMAGE_DARK : theme.IMAGE_LIGHT
    return modeData
}

export default {
    sortMode_Theme,
   getLogoImage
}