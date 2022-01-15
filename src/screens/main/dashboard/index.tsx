import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
    UserIntroWrapper, 
    ProfilePicsWrapper, 
    ScrollView ,
    Picture,
    ParentChildContainer,
    SubContainer,
    DataProfileWrapper,
    DataProfileChild,
    DataPictureWrapper,
    AppText,
    StatusCircle,
    StatusCircleSm,
    FamDataPicture,
    ChatListWrapper,
    ChatMemberTextWrapper,
    SearchContainer,
    SearchText
} from '@styles'
import { Container, Card } from '@component'
import { icons } from '@src/provider/config/constant'
import helpers from '@src/utility/helper'
import { Feather } from '@expo/vector-icons'


export  const Dashboard: React.FC<any> = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Container>
                    <UserIntroWrapper>
                        <AppText>
                            Hi 
                            <AppText fontWeight="bold"> Jake </AppText>
                        </AppText>
                        <ProfilePicsWrapper>
                            <Picture source={icons.DP_LG} />
                        </ProfilePicsWrapper>
                    </UserIntroWrapper>

                    <Card cardPadding="0">
                        <SearchContainer>
                            <Feather name="search" size={20} color="#CFCECC" />
                            <SearchText>Search</SearchText>
                        </SearchContainer>
                    </Card>

                    <Card>
                        <ParentChildContainer>
                            <SubContainer>
                                <AppText fontWeight="bold" fontSize="12" justify="center">
                                    Parent
                                </AppText>
                                <DataProfileWrapper>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP3} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="10">
                                            {helpers.textToDisplay("Ganiy Kolawole", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="8" textColor="#A6A6A6">Father</AppText>
                                    </DataProfileChild>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP} />
                                            <StatusCircle flowCircleColor="#C4C4C4"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="10">
                                            {helpers.textToDisplay("Rahmoh Kolawole", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="8" textColor="#A6A6A6">Mother</AppText>
                                    </DataProfileChild>
                                </DataProfileWrapper>
                            </SubContainer>
                            <SubContainer>
                                <AppText fontWeight="bold" fontSize="12">
                                    Children
                                </AppText>
                                <DataProfileWrapper>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="10">
                                            {helpers.textToDisplay("Roshan Kolawole", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="8" textColor="#A6A6A6">Son</AppText>
                                    </DataProfileChild>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP3} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="10">
                                            {helpers.textToDisplay("Diyah Kolawole", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="8" textColor="#A6A6A6">Daughter</AppText>
                                    </DataProfileChild>
                                </DataProfileWrapper>
                            </SubContainer>
                        </ParentChildContainer>
                    </Card>

                    <Card>
                        <AppText fontSize="12" fontWeight="bold">Messages</AppText>
                        <ChatListWrapper >
                            <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                <FamDataPicture customWidth="30" source={icons.DP3} />
                                <StatusCircleSm flowCircleColor="#00BF4D"/>
                            </DataPictureWrapper>
                            <ChatMemberTextWrapper>
                                <AppText fontSize="10" fontWeight="600">Habeeb Olanrewaju</AppText>
                                <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 65)}
                                </AppText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                        <ChatListWrapper >
                            <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                <FamDataPicture customWidth="30" source={icons.DP} />
                                <StatusCircleSm  flowCircleColor="#00BF4D"/>
                            </DataPictureWrapper>
                            <ChatMemberTextWrapper>
                                <AppText fontSize="10" fontWeight="600">Imtiyaaz Ridwan</AppText>
                                <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 65)}
                                </AppText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                        <ChatListWrapper >
                            <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                <FamDataPicture customWidth="30" source={icons.DP3} />
                                <StatusCircleSm flowCircleColor="#00BF4D"/>
                            </DataPictureWrapper>
                            <ChatMemberTextWrapper>
                                <AppText fontSize="10" fontWeight="600">Diyah Ridwan</AppText>
                                <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 65)}
                                </AppText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                    </Card>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}