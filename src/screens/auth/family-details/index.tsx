import React, { useState } from 'react'
import { CenterHorizontallyContainer, FamilyDetailsTitle, ScrollView } from '@styles';
import { icons, dropDownOptions, initialState } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator, SelectField } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FamilyDetails as DataModel } from '@model'

export const FamilyDetails: React.FC<any> = ({ navigation }) => {
    const [input, setInput] = useState<DataModel>(initialState.FAMILY_DETAILS)

    function handleSelectedData (data: string, name: string): void {
        setInput({...input, [name]: data})
        console.log(name, data)
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <FamilyDetailsTitle>Family Details</FamilyDetailsTitle>
                    <Input placeHolder="Family Name" icon={icons.FAMILY_NAME} />
                    <SelectField 
                        placeHolder={input.country || "Country"} 
                        icon={icons.COUNTRY} 
                        selectOptions={dropDownOptions.COUNTRY} 
                        selectedText={input.country} 
                        handleSelectedData={(data) => handleSelectedData(data, 'country')} />
                    <SelectField 
                        placeHolder={input.state || "State"} 
                        icon={icons.STATE} 
                        selectOptions={dropDownOptions.STATE} 
                        selectedText={input.state} 
                        handleSelectedData={(data) => handleSelectedData(data, 'state')} />
                    <Input placeHolder="HomeTown" icon={icons.HOME} />
                    <Button text="Continue" onPress={() => navigation.navigate("RelativeData")} />
                    <FlowIndicator pageNumber={2} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}