import React from 'react'
import { Text, View } from 'react-native'


export  const SignUp: React.FC<any> = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('Dashboard')}>This is SignUp screen</Text>
        </View>
    );
}