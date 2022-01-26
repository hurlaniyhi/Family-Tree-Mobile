import styled from 'styled-components/native'
import { Theme } from '@model'

export const OptionPopUp = styled.View<Theme>`
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 15px 20px
`
export const OptionText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${({textColor, theme}) => textColor ?? theme.TEXT_COLOR};
    text-align: ${({justify}) => justify || 'left'};
    width: 100%;
    padding: 10px 0px
`