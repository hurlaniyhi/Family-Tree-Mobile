import React, { useContext, useState, useLayoutEffect } from 'react'
import helpers from '@src/utility/helper'
import validator from '@src/utility/inputValidator'
import { CenterContainer, 
    WelcomeText, 
    InstructionText, 
    LoginOptionContainer, 
    RememberMeText, 
    ForgetPassText,
    SignUpLinkContainer,
    SignUpLink,
    RememberContainer,
    RememberCheckWrapper,
    ScrollView
} from '@styles'
import { LogoTop, Input, Button } from '@component';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { AsyncStorage } from 'react-native'
import { ImageSourcePropType } from 'react-native';
import { icons, initialState } from '@src/provider/config/constant'
import { Feather } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginParams } from '@model';


export  const SignIn: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { signIn } = useContext(UserContext)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const [input, setInput] = useState<LoginParams>(initialState.SIGN_IN)

    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    useLayoutEffect(() => {
        checkAuth
    }, [])
    async function checkAuth () {
        let isAuthenticated = await AsyncStorage.getItem('token')
        if(isAuthenticated) setIsAuth(true)
        else navigation.navigate('Dashboard')
    }
    function handleInput(val: string, name: string) {
        setInput({...input, [name]: val})
    }

    async function handleSubmit(){
        const isValidated = validator.login(input, theme)
        if (isValidated) {
            setInput(initialState.SIGN_UP)
            signIn(input, navigation)
        }
    }

    return (
        <>
            {
                !isAuth ?
                    <SafeAreaProvider >
                        <ScrollView>
                            <CenterContainer>
                                <LogoTop img={ logoImg } />
                                <WelcomeText>Welcome Back</WelcomeText>
                                <InstructionText>Sign in to continue</InstructionText>
                                <Input 
                                    placeHolder="Phone Number" 
                                    icon={icons.CALL} 
                                    value={input.phoneNumber}
                                    handleInputData = {(val) => handleInput(val, "phoneNumber")}
                                />
                                <Input 
                                    placeHolder="Password" 
                                    icon={icons.LOCK} 
                                    secureTextEntry
                                    value={input.password}
                                    handleInputData = {(val) => handleInput(val, "password")}
                                />
                                <LoginOptionContainer>
                                    <RememberContainer>
                                        <RememberCheckWrapper isChecked={isChecked} onPress = {() => setIsChecked(!isChecked)}>
                                        { isChecked ? <Feather name="check" size={15} color="#ffffff" /> : null}
                                        </RememberCheckWrapper>
                                        <RememberMeText>Remember me</RememberMeText>
                                    </RememberContainer>
                                    <ForgetPassText onPress = {() => navigation.navigate("EnterEmail")}>Forget Password?</ForgetPassText>
                                </LoginOptionContainer>
                                <Button text="Sign In" onPress={handleSubmit} />
                                <SignUpLinkContainer>
                                    Don't have an account? 
                                    <SignUpLink onPress={() => navigation.navigate("SignUp")}> Sign up</SignUpLink>
                                </SignUpLinkContainer>
                            </CenterContainer>
                        </ScrollView>
                    </SafeAreaProvider>
                : null
            }
        </>
    );
}