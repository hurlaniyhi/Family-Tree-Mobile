import { DarkTheme, LightTheme } from '@src/provider/config/theme'

export interface AppMode {
    THEME_MODE: string,
    BODY: string,
    FOCUS_THEME_COLOR: string,
    FOCUS_THEME_COLOR_LIGHT: string,
    FOCUS_THEME_COLOR_DEEP: string,
    CARD_BACKGROUND: string,
    BORDER: string,
    TEXT_COLOR: string,
    THEME: string
}

export interface AppTheme {
    FOCUS_THEME_COLOR: string,
    FOCUS_THEME_COLOR_LIGHT: string,
    CARD_BACKGROUND?: string,
    THEME: string
}

export interface ContextTheme {
    theme: typeof DarkTheme,
    switchTheme?: (themeData: any) => void,
    switchMode?: (mode: any) => void
}

export interface ThemeAction { 
    type: string, 
    payload: any 
}

export interface FamilyDetails {
    country: string,
    state: string
}