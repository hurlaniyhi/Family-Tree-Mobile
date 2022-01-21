import styled from 'styled-components/native'
import { Theme } from '@model'
import theme from 'react-native-elements/dist/config/theme'

export const CreatePostContainer = styled.View`
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10000;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.4);
`
export const PostPopUp = styled.View<Theme>`
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
    width: 100%;
    max-height: 50%;
    position: absolute;
    bottom: 0px;
    left: 0px;
`