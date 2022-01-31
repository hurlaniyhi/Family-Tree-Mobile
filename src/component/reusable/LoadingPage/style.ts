import styled from 'styled-components/native'
import { Theme } from '@model'
import { Video } from 'expo-av';

export const LoadingContainer = styled.View<Theme>`
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: ${({theme})=> theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoaderGif = styled(Video).attrs({
    shouldPlay: true,
    resizeMode:"contain",
    isLooping: true,
})`
    width: 150px; 
    height: 50px
`