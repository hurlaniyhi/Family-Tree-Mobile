import styled from 'styled-components/native'
import { Theme } from '@model'

export const Card = styled.View<Theme>`
    width: 100%;
    padding: ${props => props.textMargin ?? 15}px ${props => props.horizontalPadding || 20}px;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.CARD_BACKGROUND};
    margin-top: ${props => props.cardTopMargin ?? 15}px;
    margin-bottom: ${props => props.cardBottomMargin ?? 0}px;
    border-radius: 5px
` 