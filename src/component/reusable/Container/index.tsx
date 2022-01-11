import React from 'react'
import { ScreenContainer } from '@styles'

export const Container: React.FC<any> = React.memo(({children}) => {
    return (
        <ScreenContainer>
            {children}
        </ScreenContainer>
    );
})