import styled from 'styled-components/native'
import { Theme } from '@model'

export const SignUpText = styled.Text<Theme>`
    color: ${({theme}) => theme.FOCUS_THEME_COLOR};
`