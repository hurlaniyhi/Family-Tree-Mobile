import styled from 'styled-components/native'
import { Theme } from '@model'

export const MemberListWrapper = styled.View<Theme>`
    width: 90%;
    margin: 15px auto;
`
export const MemberListText = styled.Text<Theme>`
    margin: 0px;
    padding: 0px;
    margin-top: -3px;
    font-family: Poppins;
    font-style: normal;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    font-size: ${({fontSize}) => fontSize || 16}px;
    color: ${({textColor, theme}) => textColor ?? theme.TEXT_COLOR};
    text-align: ${({justify}) => justify || 'left'};
`

export const MemberStatusCircle = styled.View<Theme>`
    width: 8px;
    height: 8px;
    border-radius: 100px;
    border: 1px solid ${({theme}) => theme.THEME_MODE === "light" ? '#FFFFFF' : theme.CARD_BACKGROUND};
    background-color: ${({flowCircleColor}) => flowCircleColor};
    position: absolute;
    bottom: 1px;
    right: 3px
`