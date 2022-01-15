import React from 'react'
import { CenterHorizontallyContainer, RelativeDataTitle, AddButton, AddBtnText, AddBtnContainer, ScrollView } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const RelativeData : React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CenterHorizontallyContainer>
                    <RelativeDataTitle>Immediate Family</RelativeDataTitle>
                    <Input placeHolder="Father's Name" icon={icons.NAME} />
                    <Input placeHolder="Father's Phone Number" icon={icons.CALL} />
                    <Input placeHolder="Mother's Name" icon={icons.NAME} />
                    <Input placeHolder="Mother's Phone Number" icon={icons.CALL} />
                    <Input placeHolder="Child's Name" icon={icons.NAME} />
                    <Input placeHolder="Child's Phone Number" icon={icons.CALL} />
                    <AddBtnContainer>
                        <AddButton activeOpacity={0.8}>
                            <AddBtnText>Add Child</AddBtnText>
                        </AddButton>
                    </AddBtnContainer>
                    <Button text="Continue" btnBottomMargin="70" onPress={() => navigation.navigate("CompleteAccount")} />
                    <FlowIndicator pageNumber={3} flows={5} />
                </CenterHorizontallyContainer>
            </ScrollView>
        </SafeAreaProvider>
    );
}