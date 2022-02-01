import React, { useContext, useEffect } from 'react'
import { TitleText, CenterContainer, ScrollView } from '@styles'
import helpers from '@src/utility/helper'
import { LogoTop, Input, Button, FlowIndicator } from '@component';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'
import { ImageSourcePropType } from 'react-native';
import { icons } from '@src/provider/config/constant'
import { SafeAreaProvider } from 'react-native-safe-area-context';


export  const SignUp: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { toggleLoader } = useContext(VisibilityContext)

    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    async function handleNavigation(){
        await toggleLoader(true)
        navigation.navigate("ConfirmAccount")
    }
    
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterContainer>
                    <LogoTop img={ logoImg } />
                    <TitleText>Create New Account</TitleText>
                    <Input placeHolder="Full Name" icon={icons.NAME} />
                    <Input placeHolder="Phone Number" icon={icons.CALL} />
                    <Input placeHolder="Email" icon={icons.MAIL} />
                    <Input placeHolder="Password" icon={icons.LOCK} />
                    <Input placeHolder="Confirm Password" icon={icons.LOCK} />
                    <Button text="Sign Up" onPress={handleNavigation} />
                    <FlowIndicator pageNumber={0} flows={5} />
                </CenterContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}