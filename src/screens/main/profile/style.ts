import styled from 'styled-components/native'
import { Theme } from '@model'

export const ProfileHeader = styled.View<Theme>`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 3%;
    padding-right: 3%;
`
export const TouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 18px
`

export const ProfileDPContainer = styled.View`
    width: 130px;
    height: 130px;
    margin: 40px auto 10px auto;
    border-radius: 100px;
    background-color: #C4C4C4
`
export const ProfileDP = styled.Image`
    width: 130px;
    height: 130px;
    resize-mode: cover;
    border-radius: 100px
`