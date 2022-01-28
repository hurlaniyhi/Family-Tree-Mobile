import { Theme } from '@model'
import styled from 'styled-components/native'
import FlashMessage from "react-native-flash-message"

export const MildText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #A6A6A6;
    margin-left: 2%;
    padding-top: 3px
`

export const FlexRowBetween = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const AppText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    font-size: ${({fontSize}) => fontSize || 16}px;
    color: ${({textColor, theme}) => textColor ?? theme.TEXT_COLOR};
    text-align: ${({justify}) => justify || 'left'};
`
export const FlexRow = styled.View<Theme>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 12}px;
    width: ${({flexWidth}) => flexWidth ?? 100}%
    justify-content: ${({justify}) => justify ?? 'flex-start'}
` 
export const Circle = styled.TouchableOpacity<Theme>`
    width: 24px;
    height: 24px;
    border-radius: 100px
    background-color: ${({themeColor}) => themeColor};
    margin-left: 2%;
    border: 1px solid ${({theme, themeColor}) => 
        theme.THEME_MODE === 'light' && themeColor === '#FFFFFF' ? 
        theme.TEXT_COLOR : themeColor
    };
    display: flex;
    justify-content: center;
    align-items: center
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
    padding-left: 3%;
    color: #FF007C
`
export const FlashNotification = styled(FlashMessage).attrs((props: Theme) => ({
    position: {top: 60, left: 20, right: 20},
    statusBarHeight: 30,
    icon: "auto",
    duration: 3000,
    titleStyle: { fontWeight: 'bold', fontSize: 18 }
}))<Theme>`
    width: 100%;
    border-radius: 10px;
`