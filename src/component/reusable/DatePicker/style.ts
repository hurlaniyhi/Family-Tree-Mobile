import styled from 'styled-components/native'
import { Theme } from '@model'

export const DatePickerContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})<Theme>`
    height: 45px;
    width: 80%;
    border: 1px solid ${props => props.theme.BORDER};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-top: 30px;
`
export const SelectedDate = styled.Text<Theme>`
    width: 83%;
    font-size: 14px;
    padding-left: 2%;
    font-family: Poppins;
    padding-top: 5px;
    color: ${({selectedOption, theme}) => !selectedOption ? theme.BORDER : theme.TEXT_COLOR}
`