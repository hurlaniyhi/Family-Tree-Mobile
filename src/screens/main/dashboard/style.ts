import styled from 'styled-components/native'
import { Theme } from '@model'

export const DashboardText = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`