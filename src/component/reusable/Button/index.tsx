import React from 'react'
import { ButtonContainer, ButtonText } from '@styles'
import { ButtonProps } from '@src/model';

export const Button: React.FC<ButtonProps> = ({ onPress }) => {
    return (
        <ButtonContainer activeOpacity={0.7} onPress={onPress}>
            <ButtonText>Sign In</ButtonText>
        </ButtonContainer>
    );
}