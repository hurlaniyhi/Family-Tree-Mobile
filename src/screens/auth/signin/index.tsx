import React, { useContext } from 'react'
import helpers from '@src/utility/helper'

import { LoginContainer, 
    WelcomeText, 
    InstructionText, 
    LoginOptionContainer, 
    RememberMeText, 
    ForgetPassText,
    SignUpLinkContainer,
    SignUpLink
} from '@styles'
import { LogoTop, Input, Button } from '@component';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { ImageSourcePropType } from 'react-native';


export  const SignIn: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    return (
        <LoginContainer>
            <LogoTop img={ logoImg } />
            <WelcomeText>Welcome Back</WelcomeText>
            <InstructionText>Sign in to continue</InstructionText>
            <Input />
            <Input />
            <LoginOptionContainer>
                <RememberMeText>Remember me</RememberMeText>
                <ForgetPassText>Forget Password?</ForgetPassText>
            </LoginOptionContainer>
            <Button onPress={() => navigation.navigate("Dashboard")} />
            <SignUpLinkContainer>
                Don't have an account? 
                <SignUpLink> Sign up</SignUpLink>
            </SignUpLinkContainer>
        </LoginContainer>
    );
}