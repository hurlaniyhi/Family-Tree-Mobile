import React from 'react'
import { ScrollView } from 'react-native'
import { CenterHorizontallyContainer, RelativeDataTitle, AddButton, AddBtnText, AddBtnContainer } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'


export const RelativeData : React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <RelativeDataTitle>Immediate Family</RelativeDataTitle>
                <Input placeHolder="Father's Name" icon={icons.NAME} />
                <Input placeHolder="Father's Phone Number" icon={icons.CALL} />
                <Input placeHolder="Mother's Name" icon={icons.NAME} />
                <Input placeHolder="Mother's Phone Number" icon={icons.CALL} />
                <Input placeHolder="Child's Name" icon={icons.NAME} />
                <Input placeHolder="Child's Phone Number" icon={icons.CALL} />
                <AddBtnContainer>
                    <AddButton>
                        <AddBtnText>Add Child</AddBtnText>
                    </AddButton>
                </AddBtnContainer>
                <Button text="Continue" btnBottomMargin="70" onPress={() => navigation.navigate("CompleteAccount")} />
                <FlowIndicator pageNumber={3} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}