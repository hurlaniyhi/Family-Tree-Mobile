import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopLogoModel } from '@src/model';
import { TopLogoContainer, TopLogo } from '@styles'

export const LogoTop: React.FC<TopLogoModel> = ({ img }) => {
    return (
        <SafeAreaView>
            <TopLogoContainer>
                <TopLogo source={img}/>
            </TopLogoContainer>
        </SafeAreaView>
    );
}