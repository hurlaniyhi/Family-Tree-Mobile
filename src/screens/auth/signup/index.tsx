import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpText } from '@styles';
import ThemeContext from '@src/provider/state-manager/themeProvider'

export  const SignUp: React.FC<any> = ({ navigation }) => {
    const { switchTheme } = useContext(ThemeContext)
    
    return (
        <SafeAreaView>
            <SignUpText onPress={() => switchTheme("orange")}>This is SignUp screen</SignUpText>
        </SafeAreaView>
    );
}