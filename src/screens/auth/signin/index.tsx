import React from 'react'
import { Text, View } from 'react-native'
import { styleSignIn as styles } from '@styles'


export  const SignIn: React.FC<any> = ({ navigation }) => {
    return (
        <View>
            <Text style={styles} onPress={() => navigation.navigate('SignUp')}>This is Signin screen</Text>
        </View>
    );
}