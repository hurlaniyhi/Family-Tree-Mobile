import styled from 'styled-components/native'
import { Theme } from '@model'

export const SelectFieldText = styled.Text<Theme>`
    width: 75%;
    padding-left: 2%;
    color: ${({theme, selectedOption}) => selectedOption ? theme.TEXT_COLOR : theme.BORDER};
`
export const ArrowDownIcon = styled.TouchableOpacity`
    position: absolute;
    right: 2%;
    top: 8px
`

export const DummyInput = styled.TextInput`
    width: 90%;
    height: 45px;
    position: absolute;
    top: 0px;
    left: 5%;
`
