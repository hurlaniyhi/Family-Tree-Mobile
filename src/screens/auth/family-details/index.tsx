import React from 'react'
import { ScrollView } from 'react-native'
import { CenterHorizontallyContainer, FamilyDetailsTitle } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'

export const FamilyDetails: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <FamilyDetailsTitle>Family Details</FamilyDetailsTitle>
                <Input placeHolder="Family Name" icon={icons.FAMILY_NAME} />
                <Input placeHolder="Country" icon={icons.COUNTRY} />
                <Input placeHolder="State" icon={icons.STATE} />
                <Input placeHolder="HomeTown" icon={icons.HOME} />
                <Button text="Continue" onPress={() => navigation.navigate("RelativeData")} />
                <FlowIndicator pageNumber={2} flows={5} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}