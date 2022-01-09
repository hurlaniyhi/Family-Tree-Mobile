import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {

}

export  const Settings: React.FC<Props> = () => {
    return (
        <SafeAreaView>
            <Text>This is Settings screen</Text>
        </SafeAreaView>
    );
}