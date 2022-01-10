import styled from 'styled-components/native'
import { Theme } from '@model'


export const InputContainer = styled.View<Theme>`
    height: 45px;
    width: 80%;
    border: 1px solid ${props => props.isFocus ? props.theme.FOCUS_THEME_COLOR : props.theme.BORDER};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-top: 35px;
`
export const InputIcon = styled.Image`
    width: 10%;
    resize-mode: contain
`
export const TextInput = styled.TextInput.attrs((props: Theme) => ({
  placeholderTextColor: props.theme.BORDER,
  color: props.theme.THEME_MODE === 'light'? `rgba(${props.theme.TEXT_COLOR, 0.3})` : props.theme.BORDER
}))`
    width: 83%;
    height: 40px;
    padding-left: 2%
`