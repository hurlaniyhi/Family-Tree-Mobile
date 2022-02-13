import React, { useState, useContext } from 'react'
import { CenterHorizontallyContainer, FamilyDetailsTitle, ScrollView } from '@styles';
import { icons, dropDownOptions, initialState } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator, SelectField } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'
import helpers from '@src/utility/helper'
import validator from '@src/utility/inputValidator'
import { FamilyData } from '@model'

export const FamilyDetails: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { loader } = useContext(VisibilityContext)
    const { searchFamilyByDetails } = useContext(UserContext)

    const [input, setInput] = useState<FamilyData>(initialState.FAMILY_DETAILS)

    function handleInputData (data: string, name: string): void {
        setInput({...input, [name]: data})
    }

    async function handleNext(){
        var payload = helpers.removeValuelessProperty(input)
        const isValidated = validator.familyData(payload, theme)
        if (isValidated) {
            setInput(initialState.FAMILY_DETAILS)
            searchFamilyByDetails(payload, navigation)
        }
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <FamilyDetailsTitle>Family Details</FamilyDetailsTitle>
                    <Input 
                        placeHolder="Family Name" 
                        icon={icons.FAMILY_NAME} 
                        value={input.familyName}
                        handleInputData={(val: string) => handleInputData(val, "familyName")}
                    />
                    <SelectField 
                        placeHolder={input.country || "Country"} 
                        icon={icons.COUNTRY} 
                        selectOptions={dropDownOptions.COUNTRY} 
                        selectedText={input.country} 
                        handleSelectedData={(data) => handleInputData(data, 'country')} />
                    <SelectField 
                        placeHolder={input.state || "State"} 
                        icon={icons.STATE} 
                        selectOptions={dropDownOptions.STATE} 
                        selectedText={input.state} 
                        handleSelectedData={(data) => handleInputData(data, 'state')} />
                    <Input 
                        placeHolder="HomeTown" 
                        icon={icons.HOME} 
                        value={input.homeTown}
                        handleInputData={(val: string) => handleInputData(val, "homeTown")}
                    />
                    <Button text="Continue" onPress={handleNext} />
                    <FlowIndicator pageNumber={4} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}