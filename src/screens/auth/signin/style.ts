import styled from 'styled-components/native'

export const LoginContainer = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WelcomeText = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
`

export const InstructionText = styled.Text`
    font-size: 14px;
    color: #00BF4D;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 30px
`

export const LoginOptionContainer = styled.View`
    width: 80%;
    margin-top: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const RememberMeText = styled.Text`
    font-family: Poppins;
    font-weight: 600;
    font-size: 10px;
`

export const ForgetPassText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #00BF4D
`

export const SignUpLinkContainer = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-top: 30px
`

export const SignUpLink = styled.Text`
    color: #FF007C
`