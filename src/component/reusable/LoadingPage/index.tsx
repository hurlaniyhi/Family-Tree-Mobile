import React, { useContext, useEffect } from 'react'
import { LoadingContainer, LoaderGif } from '@styles'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { gif } from '@src/provider/config/constant'
import { ImageSourcePropType, BackHandler } from 'react-native';
import helpers from '@src/utility/helper'
import { LogoTop } from '@component';


export const LoadingView: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)
    
    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    useEffect(()=> {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
        }
    }, [])

    function handleBackPress(): any{
        return true
    }

    return (
        <LoadingContainer>
            <LogoTop img={ logoImg } />
            <LoaderGif
                source={theme.THEME_MODE === 'light' ? gif.LOADER_LIGHT : gif.LOADER_DARK}
            />
        </LoadingContainer>
    );
}