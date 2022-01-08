import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'

interface Props {

}

export  const Dashboard: React.FC<Props> = () => {
    return (
        <SafeAreaView>
            <Text>This is Dashboard screen</Text>
        </SafeAreaView>
    );
}