import React, { useContext, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { CameraWrapper, CenterHorizontallyContainer, CompleteAccountTitle, ProfileDP, ProfileDPContainer, ProfilePicture, ScrollView } from '@styles';
import { icons, dropDownOptions, initialState } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator, SelectField, DateInput } from '@component'
import helpers from '@src/utility/helper'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { UserData } from '@model';

export const CompleteAccount: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { user, updateSignUpData } = useContext(UserContext)
    const [input, setInput] = useState<UserData>(initialState.SIGN_UP)

    function handleInputData (data: string, name: string) {
        setInput({...input, [name]: data})
        console.log(name, data)
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <CompleteAccountTitle>Complete Your Account</CompleteAccountTitle>
                    <ProfileDPContainer>
                       { !user.userData.profilePicture ? 
                            <ProfilePicture source={icons.USER_ICON} /> :
                            <ProfileDP source={icons.DP3} /> 
                        }
                        <CameraWrapper activeOpacity={0.8}>
                            <Ionicons name="camera-outline" size={18} color="#FFFFFF" />
                        </CameraWrapper>
                    </ProfileDPContainer>
                    <Input 
                        placeHolder="Address" 
                        icon={icons.ADDRESS} 
                        value={input.address}
                        handleInputData={(val: string) => handleInputData(val, "address")}
                    />
                    <DateInput onChange={(data: string) => handleInputData(data, 'dateOfBirth')}  />
                    <SelectField 
                        placeHolder={input.gender || "Gender"} 
                        icon={icons.GENDER} 
                        selectOptions={dropDownOptions.GENDER} 
                        selectedText={input.gender} 
                        handleSelectedData={(data) => handleInputData(data, 'gender')} />
                    <Button text="Continue" onPress={() => navigation.navigate("FamilyDetails")} />
                    <FlowIndicator pageNumber={3} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}