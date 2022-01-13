import React from 'react'
import { ScrollView } from 'react-native'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText, GuideText } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'


export  const ConfirmEmail: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <OtpPageTitle>Confirm Your Email</OtpPageTitle>
                <KeyIcon source={icons.KEY} />
                <OtpNotificationText>
                    We have sent a
                    <OtpNotificationText textColor="#FF007C"> One Time Password </OtpNotificationText>
                </OtpNotificationText>
                <OtpNotificationText textMargin="-5">to your email</OtpNotificationText>
                <Input placeHolder="Enter OTP" icon={icons.LOCK} />
                <Button text="Continue" onPress={() => navigation.navigate("NewPassword")} />
                <GuideText>
                    Didn't receive the email? check your 
                    <GuideText textColor="#FF007C"> Spam </GuideText>
                    folder.
                </GuideText>
                <FlowIndicator pageNumber={1} flows={3} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}