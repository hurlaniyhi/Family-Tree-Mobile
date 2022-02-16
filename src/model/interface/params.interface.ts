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
    FOCUS_THEME_COLOR_DEEP: string;
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

export interface Action<T> { 
    type: string, 
    payload: T 
}

export interface VisibilityState {
    isCreatePost: boolean,
    isAddComment: boolean,
    isSearchType: boolean
}

export interface VisibilityContextModel {
    visibility: VisibilityState,
    toggleCreatePost: (data: boolean) => void
}

export type OperationStatus = 'success'|'danger'|'warning'|'info'

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    fatherName: string,
    fatherPhoneNo: string,
    motherName: string,
    motherPhoneNo: string,
    familyId: string,
    address: string,
    password: string,
    gender: string,
    dateOfBirth: string,
    registrationDate?: string,
    profilePicture: string,
    children?: Array<any>,
    education?: Array<any>,
    workExperience?: Array<any>,
    interest?: Array<any>,
    confirmPassword?: string,
    _id?: string
}

export interface FamilyData {
    familyName: string,
    country: string,
    state: string,
    homeTown: string,
    _id?: string
}

export interface LoginParams {
    phoneNumber: string,
    password: string
}

export interface OtpParams {
    otp: string, 
    sentOtp: string
}

export interface ChangePassword {
    password: string, 
    confirmPassword?: string,
    email: string
}

export interface ExtraUserData {
    children: string,
    education: string,
    workExperience: string,
    interest: string
}

export type ExtraDataKey = "children" | "education" | "interest" | "workExperience"