import styled from 'styled-components/native'
import { Theme } from '@model'

export const GuideText = styled.Text<Theme>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    padding-top: 15px;
    color: ${props => props.textColor ?? props.theme.TEXT_COLOR}
`