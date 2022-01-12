import styled from 'styled-components/native'
import { Theme } from '@model'

export const TitleText = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    font-family: Poppins;
    padding-top: 40px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`