import styled from 'styled-components/native'
import { Theme } from '@model'

export const FlowView = styled.View<Theme>`
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${({flexTopMargin}) => flexTopMargin ?? 45}px;
    margin-bottom: 8px;
    position: absolute;
    bottom: 25px;
    left: 0px
`

export const FlowCircle = styled.View<Theme>`
    width: ${({flowCircleSize}) => flowCircleSize ?? 8}px;
    height: ${({flowCircleSize}) => flowCircleSize ?? 8}px;
    border-radius: 100px;
    background-color: ${({flowCircleColor}) => flowCircleColor ?? '#BFBFBF'};
    margin: 0px 10px
`