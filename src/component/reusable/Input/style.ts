import styled from 'styled-components/native'

interface Theme {
    theme: {
        color: string
    },
    isFocus: boolean
}


export const InputContainer = styled.View<Theme>`
    height: 45px;
    width: 80%;
    border: ${props => props.isFocus ? "3px" : "1px"} solid #00BF4D;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-top: 35px;
`
export const InputIcon = styled.Image`
    width: 10%;
    resize-mode: contain
`
export const TextInput = styled.TextInput`
    width: 83%;
    height: 40px;
    padding-left: 2%
`