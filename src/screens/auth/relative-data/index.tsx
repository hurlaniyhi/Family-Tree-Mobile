import React, { useState, useContext} from 'react'
import { 
    CenterHorizontallyContainer, 
    RelativeDataTitle, 
    AddButton, 
    AddBtnText, 
    AddBtnContainer, 
    ScrollView 
} from '@styles';
import helpers from '@src/utility/helper'
import validator from '@src/utility/Inputvalidator'
import { icons, initialState } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserData } from '@model';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'


export const RelativeData : React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { updateSignUpData } = useContext(UserContext)
    const [inputData, setInputData] = useState<UserData>(initialState.SIGN_UP)

    function handleInput(val: string, name: string) {
        setInputData({...inputData, [name]: val})
    }

    async function handleNext(){
        const payload = helpers.removeValuelessProperty(inputData)
        const isValidated = validator.relativeData(payload, theme)
        if (isValidated) {
            await updateSignUpData(payload)
            setInputData(initialState.SIGN_UP)
            navigation.navigate("CompleteAccount")
        }
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <RelativeDataTitle>Immediate Family</RelativeDataTitle>
                    <Input 
                        placeHolder="Father's Name" 
                        icon={icons.NAME} 
                        value={inputData.fatherName}
                        handleInputData={(val: string) => handleInput(val, "fatherName")}
                    />
                    <Input 
                        placeHolder="Father's Phone Number" 
                        icon={icons.CALL} 
                        value={inputData.fatherPhoneNo}
                        keyboardType="phone-pad"
                        handleInputData={(val: any) => handleInput(val, "fatherPhoneNo")}
                    />
                    <Input 
                        placeHolder="Mother's Name" 
                        icon={icons.NAME} 
                        value={inputData.motherName}
                        handleInputData={(val: string) => handleInput(val, "motherName")}
                    />
                    <Input 
                        placeHolder="Mother's Phone Number" 
                        icon={icons.CALL} 
                        value={inputData.motherPhoneNo}
                        keyboardType="phone-pad"
                        handleInputData={(val: any) => handleInput(val, "motherPhoneNo")}
                    />
                    <Input placeHolder="Child's Name" icon={icons.NAME} />
                    <Input placeHolder="Child's Phone Number" icon={icons.CALL} />
                    <AddBtnContainer>
                        <AddButton activeOpacity={0.8}>
                            <AddBtnText>Add Child</AddBtnText>
                        </AddButton>
                    </AddBtnContainer>
                    <Button text="Continue" btnBottomMargin="70" onPress={handleNext} />
                    <FlowIndicator pageNumber={2} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}