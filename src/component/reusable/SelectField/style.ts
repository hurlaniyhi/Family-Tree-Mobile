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
export const SelectFieldContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})<Theme>`
    height: 45px;
    width: 80%;
    border: 1px solid ${props => props.isFocus ? props.theme.FOCUS_THEME_COLOR : props.theme.BORDER};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-top: 30px;
`