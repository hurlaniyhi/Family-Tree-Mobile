import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {

}

export  const ForgetPassword: React.FC<Props> = () => {
    return (
        <SafeAreaView>
            <Text>This is Forget Password screen</Text>
        </SafeAreaView>
    );
}