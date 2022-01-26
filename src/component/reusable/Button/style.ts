import styled from 'styled-components/native'
import { Theme } from '@model'

export const ButtonContainer = styled.TouchableOpacity<Theme>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({customWidth}) => customWidth || 80}%;
    height: ${({elementHeight}) => elementHeight || 45}px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 5px;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 30}px;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin ?? 15}px;
    margin-left: auto;
    margin-right: auto;
`

export const ButtonText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: ${({fontSize}) => fontSize || 18}px;
    color: #FFFFFF
`