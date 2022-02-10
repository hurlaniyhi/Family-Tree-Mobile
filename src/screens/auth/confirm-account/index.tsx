import React from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText, ScrollView } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const ConfirmAccount: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <OtpPageTitle>Confirm Your Account</OtpPageTitle>
                    <KeyIcon source={icons.KEY} />
                    <OtpNotificationText>
                        We have sent a 
                        <OtpNotificationText textColor="#FF007C"> One Time Password</OtpNotificationText>
                    </OtpNotificationText>
                    <OtpNotificationText textMargin="-5">to your Phone Number</OtpNotificationText>
                    <Input placeHolder="Enter OTP" icon={icons.LOCK} />
                    <Button text="Continue" onPress={() => navigation.navigate("RelativeData")} />
                    <FlowIndicator pageNumber={1} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}