import styled from 'styled-components/native'
import { Theme } from '@model'

export const RelativeDataTitle = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 70px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`
export const AddBtnContainer = styled.View<Theme>`
    width: 80%;
`

export const AddButton = styled.TouchableOpacity<Theme>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 25px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 5px;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 18}px;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin ?? 15}px;
`
export const AddBtnText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #FFFFFF
`
