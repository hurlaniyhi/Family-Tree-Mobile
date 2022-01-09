import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopLogoModel } from '@src/model';
import { TopLogoContainer } from '@styles'

export const LogoTop: React.FC<TopLogoModel> = ({ img }) => {
    return (
        <SafeAreaView>
            <TopLogoContainer>
                <Image source={require("@icons/logo-green-light.png")}/>
            </TopLogoContainer>
        </SafeAreaView>
    );
}