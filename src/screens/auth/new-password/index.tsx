import React from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, InputWrapper, ScrollView } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';


export  const NewPassword: React.FC<any> = ({ navigation }) => {
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
                    <Button text="Continue" onPress={() => navigation.navigate("SignIn")} />
                    <FlowIndicator pageNumber={2} flows={3} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}