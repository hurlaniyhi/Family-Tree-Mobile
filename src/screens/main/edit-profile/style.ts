import styled from 'styled-components/native'
import { Theme } from '@model'

export const CameraWrapper = styled.TouchableOpacity<Theme>`
    width: 25px;
    height: 25px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 8px;
    right: 5px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR}
`
export const DesignedInputContainer = styled.View<Theme>`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin || 0}px;
    border-bottom-width: 2px;
    border-bottom-color: ${({borderColor}) => borderColor || 'transparent'};
`
export const DesignedInputIcon = styled.Image`
    width: 6%;
    resize-mode: contain
`
export const DesignedTextInput = styled.TextInput.attrs((props: Theme) => ({
    placeholderTextColor: props.theme.BORDER,
    color: props.theme.THEME_MODE === 'light'? props.theme.TEXT_COLOR : props.theme.BORDER
}))`
    width: 85%;
    height: 40px;
    padding-left: 2%;
    font-size: 14px;
    font-weight: 900;
    font-family: Poppins;
    font-style: normal;
`
export const AddButtonWrapper = styled.TouchableOpacity`
    position: absolute;
    right: -5px;
    top: 12px
`

export const Text_IconWrapper = styled.View<Theme>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const RemoveButton = styled.TouchableOpacity`
    margin-left: 15px
`