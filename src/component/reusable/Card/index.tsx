import React from 'react'
import { Card as CardContainer } from '@styles'
import { CardProps } from '@model'

export const Card: React.FC<CardProps> = React.memo(({children, cardTopMargin, cardBottomMargin}) => {
    return (
        <CardContainer cardTopMargin={cardTopMargin} cardBottomMargin={cardBottomMargin}>
            {children}
        </CardContainer>
    );
})