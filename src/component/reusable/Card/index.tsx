import React from 'react'
import { Card as CardContainer } from '@styles'
import { CardProps } from '@model'

export const Card: React.FC<CardProps> = React.memo(({children, cardTopMargin, cardBottomMargin, cardPadding}) => {
    return (
        <CardContainer 
            cardTopMargin={cardTopMargin} 
            cardBottomMargin={cardBottomMargin} 
            textMargin={cardPadding}
        >
            {children}
        </CardContainer>
    );
})