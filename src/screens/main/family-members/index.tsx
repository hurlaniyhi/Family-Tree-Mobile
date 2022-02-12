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


export const FamilyMembers: React.FC<any> = (props) => {
    const members = props.route.params
    console.log({navParams: members})
    var count = 0

    return (
        <ScrollView>
            <Container>
                { 
                    React.Children.toArray(
                        members.map((member: any) => {
                            count++
                            const val = count === members.length ? '10' : undefined
                            return (
                                <Card cardPadding="10" cardTopMargin="20" cardBottomMargin={val}>
                                    <SearchedDataContainer>
                                        <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                                            <FamDataPicture customWidth="80" source={{uri: member.profilePicture}} />
                                        </DataPictureWrapper>
                                        <ActionInfoWrapper>
                                            <AppText fontSize="16" fontWeight="900">{`${member.firstName} ${member.lastName}`}</AppText>
                                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">{member.email}</AppText>
                                            <Button 
                                                btnWidth="65" 
                                                text="View Profile" 
                                                btnTopMargin="15" 
                                                btnBottomMargin="0" 
                                                btnHeight="35"
                                                btnTextSize="12"
                                                onPress={() => props.navigation.navigate('Others', {screen: 'Profile'})}
                                            />
                                        </ActionInfoWrapper>
                                    </SearchedDataContainer>
                                </Card>
                            )
                        }
                    ))
                }
            </Container>
        </ScrollView>
    );
}