import styled from 'styled-components/native'
import { Theme } from '@model'

export const BackgroundImage  = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex: 1
`
export const ChatHeader = styled.View<Theme>`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3%;
    padding-right: 3%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.CARD_BACKGROUND}
`
export const RightChatWrapper = styled.View<Theme>`
    margin-right: 2%;
    margin-left: 15%;
    display: flex;
    align-items: flex-end;
`
export const LeftChatWrapper = styled.View<Theme>`
    margin-right: 15%;
    margin-left: 2%;
    display: flex;
    align-items: flex-start
`
export const ChatTextWrapper = styled.View<Theme>`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 10px;
    background-color: ${({justify, theme}) =>  justify ?  theme.THEME_MODE === 'light'? theme.FOCUS_THEME_COLOR_LIGHT: theme.FOCUS_THEME_COLOR_DEEP  : theme.THEME_MODE === 'light' ? '#DADADA' : '#2B2B2B'};
    padding-left: 3%;
    padding-right: 3%;
    border-top-right-radius: ${({justify}) => justify ? 0 : 10}px;
    border-top-left-radius: ${({justify}) => justify ? 10 : 0}px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const ChatsWrapper = styled.View`
    width: 100%;
    margin-top: 60px
`
export const EnterChatWrapper = styled.View`
    width: 94%;
    left: 3%;
    right: 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 10px;
`
export const ChatInputContainer = styled.View<Theme>`
    width: 86%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
    border: 2px solid ${({theme}) => theme.THEME_MODE === 'light' ?"#CFCECC" : 'transparent'};
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.FOCUS_THEME_COLOR_DEEP}
`
export const ChatButton = styled.TouchableOpacity<Theme>`
    width: 12%;
    margin-left: 2%;
    height: 43px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ChatInput = styled.TextInput.attrs((props: Theme) => ({
    placeholderTextColor: "#CFCECC",
    color: props.theme.THEME_MODE === 'light'? props.theme.TEXT_COLOR : props.theme.BORDER
  }))`
      width: 86%;
      height: 45px;
      padding-left: 3%;
      font-size: 16px
  `