import styled from 'styled-components/native'
import { Theme } from '@model'

export const ToggleFamilyDetails = styled.View<Theme>`
    width: 100%;
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const TogglerIndicator = styled.View<Theme>`
    width: 50%;
    position: absolute;
    height: 2px;
    bottom: 0px;
    left: ${({toggleDisplay}) => toggleDisplay ? '50%' : '0px'}
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR}
`
export const ToggleText = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 50%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
`