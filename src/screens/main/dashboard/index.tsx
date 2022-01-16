import React, { useContext } from 'react'
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
    SearchText,
    PostContainer,
    PostImage,
    FlexRowBetween,
    MemberListText
} from '@styles'
import { Container, Card } from '@component'
import { icons } from '@src/provider/config/constant'
import helpers from '@src/utility/helper'
import { Feather, Entypo } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'


export  const Dashboard: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Container>
                    <UserIntroWrapper>
                        <AppText>
                            Hi 
                            <AppText fontWeight="bold"> Ridwan </AppText>
                        </AppText>
                        <ProfilePicsWrapper>
                            <Picture source={icons.DP3} />
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
                                            {helpers.textToDisplay("Ridwan Kolawole", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="8" textColor="#A6A6A6">Father</AppText>
                                    </DataProfileChild>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP4} />
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
                                            <FamDataPicture source={icons.DP2} />
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
                                <MemberListText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 75)}
                                </MemberListText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                        <ChatListWrapper >
                            <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                <FamDataPicture customWidth="30" source={icons.DP} />
                                <StatusCircleSm  flowCircleColor="#00BF4D"/>
                            </DataPictureWrapper>
                            <ChatMemberTextWrapper>
                                <AppText fontSize="10" fontWeight="600">Imtiyaaz Ridwan</AppText>
                                <MemberListText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Let us start developing the mobile app using React-native. We will use styled-components for CSS.", 75)}
                                </MemberListText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                        <ChatListWrapper >
                            <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                <FamDataPicture customWidth="30" source={icons.DP2} />
                                <StatusCircleSm flowCircleColor="#00BF4D"/>
                            </DataPictureWrapper>
                            <ChatMemberTextWrapper>
                                <AppText fontSize="10" fontWeight="600">Diyah Ridwan</AppText>
                                <MemberListText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                    {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 75)}
                                </MemberListText>
                            </ChatMemberTextWrapper>
                        </ChatListWrapper >
                    </Card>
    
                    <Card cardPadding="0">
                        <PostContainer>
                            <ChatListWrapper flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                    <FamDataPicture customWidth="30" source={icons.DP} />
                                    <StatusCircleSm flowCircleColor="#FF007C"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="10" fontWeight="600">Akachukwu Ajulibe</AppText>
                                    <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <AppText fontWeight="600" fontSize="10">Y'all should checkout this sick wallpaper</AppText>
                            <PostImage source={icons.POST_IMAGE} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={15} color={theme.FOCUS_THEME_COLOR} /> 9
                                </AppText>
                                <AppText fontWeight="600" fontSize="10">5 Comments</AppText>
                            </FlexRowBetween>
                        </PostContainer>
                    </Card>
                    <Card cardPadding="0">
                        <PostContainer>
                            <ChatListWrapper flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                    <FamDataPicture customWidth="30" source={icons.DP3} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="10" fontWeight="600">Roshan Ridwan</AppText>
                                    <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <AppText fontWeight="600" fontSize="10">Omoh the 'i' don suffer my guy gan...lol</AppText>
                            <PostImage source={icons.POST_IMAGE3} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={15} color={theme.FOCUS_THEME_COLOR} /> 40
                                </AppText>
                                <AppText fontWeight="600" fontSize="10">25 Comments</AppText>
                            </FlexRowBetween>
                        </PostContainer>
                    </Card>
                    <Card cardBottomMargin="10">
                        <PostContainer>
                            <ChatListWrapper flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="30" flexBottomMargin="0">
                                    <FamDataPicture customWidth="30" source={icons.DP3} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="10" fontWeight="600">Habeeb Olanrewaju</AppText>
                                    <AppText fontSize="8" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <AppText fontWeight="600" fontSize="10">CSS na your mate ni...una never see anything</AppText>
                            <PostImage source={icons.POST_IMAGE1} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={15} color={theme.FOCUS_THEME_COLOR} /> 28
                                </AppText>
                                <AppText fontWeight="600" fontSize="10">10 Comments</AppText>
                            </FlexRowBetween>
                        </PostContainer>
                    </Card>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}