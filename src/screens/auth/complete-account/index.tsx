import React, { useContext, useState } from 'react'
import { ImageSourcePropType, ScrollView } from 'react-native'
import { CenterHorizontallyContainer, CompleteAccountTitle, ProfilePicture } from '@styles';
import { icons, dropDownOptions } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator, SelectField } from '@component'
import helpers from '@src/utility/helper'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const CompleteAccount: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const [input, setInput] = useState({gender: ''})

    let userIcon: ImageSourcePropType = helpers.getUserIcon(theme)

    function handleSelectedData (data: string, name: string) {
        setInput({...input, [name]: data})
        console.log(name, data)
    }

    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <CenterHorizontallyContainer>
                    <CompleteAccountTitle>Complete Your Account</CompleteAccountTitle>
                    <ProfilePicture source={userIcon} />
                    <Input placeHolder="Address" icon={icons.ADDRESS} />
                    <Input placeHolder="Date of Birth" icon={icons.DATE} />
                    <SelectField 
                        placeHolder={input.gender || "Gender"} 
                        icon={icons.GENDER} 
                        selectOptions={dropDownOptions.GENDER} 
                        selectedText={input.gender} 
                        handleSelectedData={(data) => handleSelectedData(data, 'gender')} />
                    <Button text="Continue" onPress={() => navigation.navigate("Dashboard")} />
                    <FlowIndicator pageNumber={4} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}