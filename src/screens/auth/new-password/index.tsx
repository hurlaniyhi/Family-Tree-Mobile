import React, { useContext, useState} from 'react'
import { CenterHorizontallyContainer, OtpPageTitle, KeyIcon, InputWrapper, ScrollView } from '@styles';
import { icons, initialState} from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import helpers from '@src/utility/helper'
import validator from '@src/utility/inputValidator'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { ChangePassword } from '@model';


export  const NewPassword: React.FC<any> = (props) => {
    const { theme } = useContext(ThemeContext)
    const { changePassword } = useContext(UserContext)
    const [input, setInput] = useState<ChangePassword>(initialState.CHANGE_PASSWORD)
    const email = props.route.params

    function handleSubmit () {
        const payload = {...input, email: email.param}
        const isValidated = validator.changePassword(payload, theme)
        if (isValidated) {
            setInput(initialState.CHANGE_PASSWORD)
            changePassword(payload, props.navigation)
        }
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <OtpPageTitle>Enter your new password</OtpPageTitle>
                    <KeyIcon source={icons.KEY} />
                    <InputWrapper>
                        <Input 
                            placeHolder="Enter New Password" 
                            icon={icons.LOCK} 
                            value={input.password}
                            secureTextEntry
                            handleInputData = {(val) => setInput({...input, password: val})}
                        />
                        <Input 
                            placeHolder="Confirm New Password" 
                            icon={icons.LOCK} 
                            value={input.confirmPassword}
                            secureTextEntry
                            handleInputData = {(val) => setInput({...input, confirmPassword: val})}
                        />
                    </InputWrapper>
                    <Button text="Continue" onPress={handleSubmit} />
                    <FlowIndicator pageNumber={2} flows={3} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}