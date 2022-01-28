import React, { useContext } from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, InputWrapper, ScrollView } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import helpers from '@src/utility/helper'
import ThemeContext from '@src/provider/state-manager/themeProvider'


export  const NewPassword: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)

    function handleNavigation(){
        helpers.showNotification('success', 'Success', 'Password has been successfully reset. Kindly login again with the new password', theme)

        //navigation.navigate("SignIn")
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <OtpPageTitle>Enter your new password</OtpPageTitle>
                    <KeyIcon source={icons.KEY} />
                    <InputWrapper>
                        <Input placeHolder="Enter New Password" icon={icons.LOCK} />
                        <Input placeHolder="Confirm New Password" icon={icons.LOCK} />
                    </InputWrapper>
                    <Button text="Continue" onPress={handleNavigation} />
                    <FlowIndicator pageNumber={2} flows={3} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}