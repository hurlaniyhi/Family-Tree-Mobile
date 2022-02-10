import React, { useContext, useState, useEffect } from 'react'
import { TitleText, CenterContainer, ScrollView } from '@styles'
import helpers from '@src/utility/helper'
import validator from '@src/utility/Inputvalidator'
import { LogoTop, Input, Button, FlowIndicator } from '@component';
import ThemeContext from '@src/provider/state-manager/themeProvider'
//import VisibilityContext from '@src/provider/state-manager/visibilityProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { ImageSourcePropType } from 'react-native';
import { icons, initialState } from '@src/provider/config/constant'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserData } from '@model';


export  const SignUp: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { updateSignUpData } = useContext(UserContext)
    const [inputData, setInputData] = useState<UserData>(initialState.SIGN_UP)

    let logoImg: ImageSourcePropType = helpers.logoImage(theme)

    async function handleNext(){
        const payload = helpers.removeValuelessProperty(inputData)
        const isValidated = validator.personalData(payload, theme)
        if (isValidated) {
            await updateSignUpData(payload)
            setInputData(initialState.SIGN_UP)
            navigation.navigate("ConfirmAccount")
        }
    }

    function handleInput(val: string, name: string) {
        setInputData({...inputData, [name]: val})
    }
    
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterContainer>
                    <LogoTop img={ logoImg } />
                    <TitleText>Create New Account</TitleText>
                    <Input 
                        placeHolder="First Name" 
                        icon={icons.NAME}
                        value={inputData.firstName}
                        handleInputData = {(val) => handleInput(val, "firstName")}
                    />
                    <Input 
                        placeHolder="Last Name" 
                        icon={icons.NAME} 
                        value={inputData.lastName}
                        handleInputData = {(val) => handleInput(val, "lastName")}
                    />
                    <Input 
                        placeHolder="Phone Number" 
                        icon={icons.CALL}
                        keyboardType="phone-pad"
                        value={inputData.phoneNumber}
                        handleInputData = {(val) => handleInput(val, "phoneNumber")}
                    />
                    <Input 
                        placeHolder="Email" 
                        icon={icons.MAIL}
                        keyboardType="email-address"
                        value={inputData.email}
                        handleInputData = {(val) => handleInput(val, "email")}
                    />
                    <Input 
                        placeHolder="Password" 
                        icon={icons.LOCK}
                        secureTextEntry
                        value={inputData.password}
                        handleInputData = {(val) => handleInput(val, "password")}
                    />
                    <Input 
                        placeHolder="Confirm Password" 
                        icon={icons.LOCK} 
                        secureTextEntry
                        value={inputData.confirmPassword}
                        handleInputData = {(val) => handleInput(val, "confirmPassword")}
                    />
                    <Button text="Sign Up" onPress={handleNext} />
                    <FlowIndicator pageNumber={0} flows={5} />
                </CenterContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}

