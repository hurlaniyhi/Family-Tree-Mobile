import styled from 'styled-components/native'

interface Theme {
    theme: {
        color: string
    }
}

export const SignUpText = styled.Text<Theme>`
color: ${props => props.theme.color};
`