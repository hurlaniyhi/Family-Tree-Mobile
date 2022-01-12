import styled from 'styled-components/native'
import { Theme } from '@model'

export const ButtonContainer = styled.TouchableOpacity<Theme>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 45px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 5px;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 30}px;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin ?? 15}px
`

export const ButtonText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF
`