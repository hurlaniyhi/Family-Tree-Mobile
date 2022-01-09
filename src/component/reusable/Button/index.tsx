import React from 'react'
import { ButtonContainer, ButtonText } from '@styles'

export const Button: React.FC<any> = () => {
    return (
        <ButtonContainer activeOpacity={0.7}>
            <ButtonText>Sign In</ButtonText>
        </ButtonContainer>
    );
}