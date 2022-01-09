import React from 'react'

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


export  const SignIn: React.FC<any> = ({ navigation }) => {
    return (
        <LoginContainer>
            <LogoTop />
            <WelcomeText>Welcome Back</WelcomeText>
            <InstructionText>Sign in to continue</InstructionText>
            <Input />
            <Input />
            <LoginOptionContainer>
                <RememberMeText>Remember me</RememberMeText>
                <ForgetPassText>Forget Password?</ForgetPassText>
            </LoginOptionContainer>
            <Button />
            <SignUpLinkContainer>Don't have an account? <SignUpLink>Sign up</SignUpLink></SignUpLinkContainer>
        </LoginContainer>
    );
}