import React from 'react'
import { ScrollView } from 'react-native'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'

export const ConfirmAccount: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <OtpPageTitle>Confirm Your Account</OtpPageTitle>
                <KeyIcon source={icons.KEY} />
                <OtpNotificationText>
                    We have sent a 
                    <OtpNotificationText textColor="#FF007C"> One Time Password</OtpNotificationText>
                </OtpNotificationText>
                <OtpNotificationText textMargin="-5">to your Phone Number</OtpNotificationText>
                <Input placeHolder="Enter OTP" icon={icons.LOCK} />
                <Button text="Continue" onPress={() => navigation.navigate("FamilyDetails")} />
                <FlowIndicator pageNumber={1} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}