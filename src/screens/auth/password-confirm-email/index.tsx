import React, {useState, useEffect, useContext} from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, OtpNotificationText, GuideText, ScrollView } from '@styles';
import { icons, constant, initialState } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import validator from '@src/utility/inputValidator'
import { OtpParams } from '@model';


export  const ConfirmEmail: React.FC<any> = (props) => {
    const { theme } = useContext(ThemeContext)
    const { sendOtp } = useContext(UserContext)
    const [input, setInput] = useState<OtpParams>(initialState.OTP_PARAM)
    const email = props.route.params

    useEffect(() => {
        getOtp()
    }, [])

    async function getOtp () {
        const otp = await sendOtp(email.param, constant.EMAIL_FORGET_PASSWORD)
        console.log({otp})
        otp ? setInput({...input, sentOtp: otp}) : props.navigation.navigate('SignIn')
    }

    function handleNext () {
        const isValidated = validator.otp(input, theme)
        if (isValidated) {
            setInput(initialState.OTP_PARAM)
            props.navigation.navigate("NewPassword", { param:  email.param})
        }
    }


    return (
        <SafeAreaProvider>
            <ScrollView >
                <CenterHorizontallyContainer>
                    <OtpPageTitle>Confirm Your Email</OtpPageTitle>
                    <KeyIcon source={icons.KEY} />
                    <OtpNotificationText>
                        We have sent a
                        <OtpNotificationText textColor="#FF007C"> One Time Password </OtpNotificationText>
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
                    <GuideText>
                        Didn't receive the email? check your 
                        <GuideText textColor="#FF007C"> Spam </GuideText>
                        folder.
                    </GuideText>
                    <FlowIndicator pageNumber={1} flows={3} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}