import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpText } from '@styles';


export  const SignUp: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <SignUpText onPress={() => navigation.navigate('Dashboard')}>This is SignUp screen</SignUpText>
        </SafeAreaView>
    );
}