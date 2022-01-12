import React, { useContext } from 'react'
import helpers from '@src/utility/helper'
import { CenterContainer, 
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
import { ImageSourcePropType, ScrollView } from 'react-native';
import { icons } from '@src/provider/config/constant'


export  const SignIn: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterContainer>
                <LogoTop img={ logoImg } />
                <WelcomeText>Welcome Back</WelcomeText>
                <InstructionText>Sign in to continue</InstructionText>
                <Input placeHolder="Phone Number" icon={icons.CALL} />
                <Input placeHolder="Password" icon={icons.LOCK} />
                <LoginOptionContainer>
                    <RememberMeText>Remember me</RememberMeText>
                    <ForgetPassText>Forget Password?</ForgetPassText>
                </LoginOptionContainer>
                <Button text="Sign In" onPress={() => navigation.navigate("Dashboard")} />
                <SignUpLinkContainer>
                    Don't have an account? 
                    <SignUpLink onPress={() => navigation.navigate("SignUp")}> Sign up</SignUpLink>
                </SignUpLinkContainer>
            </CenterContainer>
        </ScrollView>
    );
}