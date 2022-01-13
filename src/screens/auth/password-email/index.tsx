import React from 'react'
import { ScrollView } from 'react-native'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'


export  const EnterEmail: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <OtpPageTitle>Enter Your Email</OtpPageTitle>
                <KeyIcon source={icons.KEY} />
                <OtpNotificationText>
                    Enter the
                    <OtpNotificationText textColor="#FF007C"> Email </OtpNotificationText>
                    connected to
                </OtpNotificationText>
                <OtpNotificationText textMargin="-5">your Account</OtpNotificationText>
                <Input placeHolder="Enter Email" icon={icons.MAIL} />
                <Button text="Continue" onPress={() => navigation.navigate("ConfirmEmail")} />
                <FlowIndicator pageNumber={0} flows={3} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}