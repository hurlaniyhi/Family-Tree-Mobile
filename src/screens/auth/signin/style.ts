import styled from 'styled-components/native'
import { Theme } from '@model'

export const CenterContainer = styled.View<Theme>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
`

export const CenterHorizontallyContainer = styled.View<Theme>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
`
export const WelcomeText = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`

export const InstructionText = styled.Text<Theme>`
    font-size: 14px;
    color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    text-align: center;
    padding-top: 0px;
    padding-bottom: 30px
`

export const LoginOptionContainer = styled.View`
    width: 80%;
    margin-top: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const RememberMeText = styled.Text<Theme>`
    font-family: Poppins;
    font-weight: 600;
    font-size: 10px;
    padding-top: 3.5px;
    color: #727272
`

export const ForgetPassText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: ${({theme}) => theme.FOCUS_THEME_COLOR}
`

export const SignUpLinkContainer = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${({theme}) => theme.TEXT_COLOR};
    margin-top: 30px
`

export const SignUpLink = styled.Text`
    color: #FF007C
`
export const RememberContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const RememberCheckWrapper = styled.Text<Theme>`
    height: 16px;
    width: 16px;
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.FOCUS_THEME_COLOR}
    background-color: ${({isChecked, theme}) => isChecked ? theme.FOCUS_THEME_COLOR : theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalContent = styled.View<Theme>`
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: white
`