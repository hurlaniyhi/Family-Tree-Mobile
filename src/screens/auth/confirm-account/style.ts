import styled from 'styled-components/native'
import { Theme } from '@model'

export const OtpPageTitle = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`
export const KeyIcon = styled.Image`
    resize-mode: contain;
    margin-top: 30px;
    margin-bottom: 20px
`
export const OtpNotificationText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    color: ${props => props.textColor ?? props.theme.TEXT_COLOR};
    margin-top: ${({textMargin}) => textMargin ?? 30}px;
    margin-bottom: ${({textMargin}) => textMargin ? 35 : 0}px;
`