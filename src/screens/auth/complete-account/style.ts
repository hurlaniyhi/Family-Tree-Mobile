import styled from 'styled-components/native'
import { Theme } from '@model'

export const CompleteAccountTitle = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`

export const ProfilePicture = styled.Image`
    resize-mode: contain;
    margin-top: 30px;
    margin-bottom: 20px
` 