import React from 'react'
import { 
    ScrollView,
    AppText,
    DataPictureWrapper,
    FamDataPicture,
    SearchedDataContainer,
    ActionInfoWrapper,
} from '@styles'
import { Container, Card, Button } from '@component'
import { icons } from '@src/provider/config/constant'


export const FamilyMembers: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <Card cardPadding="10" cardTopMargin="20">
                    <SearchedDataContainer>
                        <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                            <FamDataPicture customWidth="80" source={icons.DP} />
                        </DataPictureWrapper>
                        <ActionInfoWrapper>
                            <AppText fontSize="16" fontWeight="900">Akachukwu Ajulibe</AppText>
                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">olaniyi.jibola152@gmail.com</AppText>
                            <Button 
                                btnWidth="65" 
                                text="View Profile" 
                                btnTopMargin="15" 
                                btnBottomMargin="0" 
                                btnHeight="35"
                                btnTextSize="12"
                                onPress={() => navigation.navigate('Others', {screen: 'Profile'})}
                            />
                        </ActionInfoWrapper>
                    </SearchedDataContainer>
                </Card>
                <Card cardPadding="10" cardTopMargin="10" cardBottomMargin="10">
                    <SearchedDataContainer>
                        <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                            <FamDataPicture customWidth="80" source={icons.DP3} />
                        </DataPictureWrapper>
                        <ActionInfoWrapper>
                            <AppText fontSize="16" fontWeight="900">Imtiyaaz Ridwan</AppText>
                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">devrhydhur@gmail.com</AppText>
                            <Button 
                                btnWidth="65" 
                                text="View Profile" 
                                btnTopMargin="15" 
                                btnBottomMargin="0" 
                                btnHeight="35"
                                btnTextSize="12"
                                onPress={() => console.log("Viewed")}
                            />
                        </ActionInfoWrapper>
                    </SearchedDataContainer>
                </Card>
            </Container>
        </ScrollView>
    );
}