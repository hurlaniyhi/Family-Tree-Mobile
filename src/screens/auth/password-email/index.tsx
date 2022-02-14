import React, { useState, useContext } from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText, ScrollView } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import validator from '@src/utility/inputValidator'


export  const EnterEmail: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const [input, setInput] = useState<string>('')

    function handleNext () {
        const isValidated = validator.emailData(input, theme)
        if (isValidated) {
            setInput('')
            navigation.navigate("ConfirmEmail", { param: input })
        }
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <OtpPageTitle>Enter Your Email</OtpPageTitle>
                    <KeyIcon source={icons.KEY} />
                    <OtpNotificationText>
                        Enter the
                        <OtpNotificationText textColor="#FF007C"> Email </OtpNotificationText>
                        connected to
                    </OtpNotificationText>
                    <OtpNotificationText textMargin="-5">your Account</OtpNotificationText>
                    <Input 
                        placeHolder="Enter Email" 
                        icon={icons.MAIL} 
                        keyboardType="email-address"
                        value={input}
                        handleInputData = {(val) => setInput(val)}
                    />
                    <Button text="Continue" onPress={handleNext} />
                    <FlowIndicator pageNumber={0} flows={3} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}