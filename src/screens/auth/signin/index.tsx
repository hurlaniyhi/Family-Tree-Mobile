import React, { useContext, useState } from 'react'
import helpers from '@src/utility/helper'
import { CenterContainer, 
    WelcomeText, 
    InstructionText, 
    LoginOptionContainer, 
    RememberMeText, 
    ForgetPassText,
    SignUpLinkContainer,
    SignUpLink,
    RememberContainer,
    RememberCheckWrapper
} from '@styles'
import { LogoTop, Input, Button } from '@component';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { ImageSourcePropType, ScrollView } from 'react-native';
import { icons } from '@src/provider/config/constant'
import { Feather } from '@expo/vector-icons'
// import { Slide } from 'native-base'


export  const SignIn: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const [isChecked, setIsChecked] = useState<boolean>(true)

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
                    <RememberContainer>
                        <RememberCheckWrapper isChecked={isChecked} onPress = {() => setIsChecked(!isChecked)}>
                        { isChecked ? <Feather name="check" size={15} color="#ffffff" /> : null}
                        </RememberCheckWrapper>
                        <RememberMeText>Remember me</RememberMeText>
                    </RememberContainer>
                    <ForgetPassText onPress = {() => navigation.navigate("EnterEmail")}>Forget Password?</ForgetPassText>
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