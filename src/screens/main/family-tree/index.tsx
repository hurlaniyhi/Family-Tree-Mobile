import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {

}

export  const FamilyTree: React.FC<Props> = () => {
    return (
        <SafeAreaView>
            <Text>This is FamilyTree screen</Text>
        </SafeAreaView>
    );
}