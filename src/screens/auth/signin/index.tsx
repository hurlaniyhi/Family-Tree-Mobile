import React, { useContext } from 'react'

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


export  const SignIn: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <LoginContainer>
            <LogoTop img={theme.LOGO_IMAGE} />
            <WelcomeText>Welcome Back</WelcomeText>
            <InstructionText>Sign in to continue</InstructionText>
            <Input />
            <Input />
            <LoginOptionContainer>
                <RememberMeText>Remember me</RememberMeText>
                <ForgetPassText>Forget Password?</ForgetPassText>
            </LoginOptionContainer>
            <Button onPress={() => navigation.navigate("Dashboard")} />
            <SignUpLinkContainer>Don't have an account? <SignUpLink>Sign up</SignUpLink></SignUpLinkContainer>
        </LoginContainer>
    );
}