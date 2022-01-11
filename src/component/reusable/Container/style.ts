import styled from 'styled-components/native'
import { Theme } from '@model'

export const ScreenContainer = styled.View<Theme>`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.BODY}
`