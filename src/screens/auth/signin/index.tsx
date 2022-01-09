import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styleSignIn as styles } from '@styles'


export  const SignIn: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={styles} onPress={() => navigation.navigate('SignUp')}>This is Signin screen</Text>
        </SafeAreaView>
    );
}