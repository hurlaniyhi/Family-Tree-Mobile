import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginContainer, WelcomeText } from '@styles'
import { LogoTop } from '@component';


export  const SignIn: React.FC<any> = ({ navigation }) => {
    return (
        <LoginContainer>
            <SafeAreaView>
            <LogoTop />
            <WelcomeText>Welcome Back</WelcomeText>
            {/* <Text onPress={() => navigation.navigate('SignUp')}>This is Signin screen</Text> */}
            </SafeAreaView>
        </LoginContainer>
    );
}