import React from 'react'
import { DashboardText } from '@styles'
import { Container } from '@component'

export  const Dashboard: React.FC<any> = () => {
    return (
        <Container>
            <DashboardText>This is Dashboard screen</DashboardText>
        </Container>
    );
}