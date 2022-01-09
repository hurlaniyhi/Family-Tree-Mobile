import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Props {

}

export  const Dashboard: React.FC<Props> = () => {
    return (
        <SafeAreaView>
            <Text>This is Dashboard screen</Text>
        </SafeAreaView>
    );
}