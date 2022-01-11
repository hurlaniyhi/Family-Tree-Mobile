import { Theme } from '@model'
import styled from 'styled-components/native'

export const AppText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: ${({fontWeight}) => fontWeight ?? 400};
    font-size: ${({fontSize}) => fontSize ?? 16}px;
    color: ${props => props.textColor ?? props.theme.TEXT_COLOR}
`
export const MildText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #A6A6A6;
    margin-left: 2%;
    padding-top: 3px
`
export const FlexRow = styled.View<Theme>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 10}px;
    width: ${({flexWidth}) => flexWidth ?? 100}%
    justify-content: ${({justify}) => justify ?? 'flex-start'}
` 
export const FlexRowBetween = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Circle = styled.Text<Theme>`
    width: 24px;
    height: 24px;
    border-radius: 100px
    background-color: ${({themeColor}) => themeColor};
    margin-left: 2%;
    border: 1px solid ${props => 
        props.theme.THEME_MODE === 'light' && props.themeColor === '#FFFFFF' ? 
        props.theme.TEXT_COLOR : props.themeColor
    }
`
export const SettingIcon = styled.Image`
    resize-mode: contain;
`

export const LogoutText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    padding-top: 2px;
    margin: 0px;
    padding-left: 2%;
    color: #FF007C
`