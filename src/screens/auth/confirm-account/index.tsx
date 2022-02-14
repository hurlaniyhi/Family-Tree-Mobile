import React, { useState, useEffect, useContext } from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText, ScrollView } from '@styles';
import { icons, constant, initialState} from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import validator from '@src/utility/inputValidator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OtpParams } from '@model';

export const ConfirmAccount: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { user, sendOtp } = useContext(UserContext)
    const [input, setInput] = useState<OtpParams>(initialState.OTP_PARAM)

    useEffect(() => {
        getOtp()
    }, [])

    async function getOtp () {
        const otp = await sendOtp(user.userData.email, constant.EMAIL_ONBOARDING)
        console.log({otp})
        otp ? setInput({...input, sentOtp: otp}) : navigation.navigate('SignUp')
    }

    function handleNext () {
        const isValidated = validator.otp(input, theme)
        if (isValidated) {
            setInput(initialState.OTP_PARAM)
            navigation.navigate("RelativeData")
        }
    }

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
                    <OtpNotificationText textMargin="-5">to your email</OtpNotificationText>
                    <Input 
                        placeHolder="Enter OTP" 
                        icon={icons.LOCK} 
                        value={input.otp}
                        keyboardType="phone-pad"
                        handleInputData = {(val) => setInput({...input, otp: val})}
                    />
                    <Button text="Continue" onPress={handleNext} />
                    <FlowIndicator pageNumber={1} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}