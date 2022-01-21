import React from 'react'
import { ButtonContainer, ButtonText } from '@styles'
import { ButtonProps } from '@src/model';

export const Button: React.FC<ButtonProps> = React.memo(({ onPress, text, btnTopMargin, btnBottomMargin, btnWidth }) => {
    return (
        <ButtonContainer 
            activeOpacity={0.7} 
            onPress={onPress} 
            flexTopMargin={btnTopMargin} 
            flexBottomMargin={btnBottomMargin}
            customWidth={btnWidth}
        >
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
    );
})