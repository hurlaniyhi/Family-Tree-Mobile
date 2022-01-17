import React from 'react'
import { 
    ScrollView,
    DataPictureWrapper,
    AppText,
    StatusCircleSm,
    FamDataPicture,
    ChatListWrapper,
    ChatMemberTextWrapper,
    MemberListWrapper,
    MemberListText,
    MemberStatusCircle
} from '@styles'
import { Container } from '@component'
import { icons } from '@src/provider/config/constant'
import helpers from '@src/utility/helper'

export  const ChatMembers: React.FC<any> = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <MemberListWrapper>
                    <ChatListWrapper onPress={()=> navigation.navigate('Others', { screen: 'Chat'})} flexTopMargin="13" flexBottomMargin="12" >
                        <DataPictureWrapper customWidth="42" flexBottomMargin="0">
                            <FamDataPicture customWidth="42" source={icons.DP3} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <AppText fontSize="16" fontWeight="600">Imtiyaaz Ridwan</AppText>
                            <MemberListText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                {helpers.textToDisplay("Let us start developing the mobile app using React-native. We will use styled-components for CSS.", 50)}
                            </MemberListText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                    <ChatListWrapper flexTopMargin="13" flexBottomMargin="12" >
                        <DataPictureWrapper customWidth="42" flexBottomMargin="0">
                            <FamDataPicture customWidth="42" source={icons.DP2} />
                            <MemberStatusCircle flowCircleColor="#C4C4C4"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <MemberListText fontSize="16" fontWeight="600">Diyah Ridwan</MemberListText>
                            <MemberListText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                {helpers.textToDisplay("I just completed the APIs for the Family Tree App, i will be starting the front-end soon", 50)}
                            </MemberListText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                    <ChatListWrapper flexTopMargin="13" flexBottomMargin="12" >
                        <DataPictureWrapper customWidth="42" flexBottomMargin="0">
                            <FamDataPicture customWidth="42" source={icons.DP4} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <MemberListText fontSize="16" fontWeight="600">Kifayah Adeniyi</MemberListText>
                            <MemberListText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 50)}
                            </MemberListText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                    <ChatListWrapper flexTopMargin="13" flexBottomMargin="12" >
                        <DataPictureWrapper customWidth="42" flexBottomMargin="0">
                            <FamDataPicture customWidth="42" source={icons.DP} />
                            <MemberStatusCircle flowCircleColor="#FF007C"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <MemberListText fontSize="16" fontWeight="600">Akachukwu Ajulibe</MemberListText>
                            <MemberListText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 65)}
                            </MemberListText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                    <ChatListWrapper flexTopMargin="13" flexBottomMargin="12" >
                        <DataPictureWrapper customWidth="42" flexBottomMargin="0">
                            <FamDataPicture customWidth="42" source={icons.DP2} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <MemberListText fontSize="16" fontWeight="600">My Family</MemberListText>
                            <MemberListText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                {helpers.textToDisplay("I just completed the APIs for the Family Tree App, i will be starting the front-end soon", 50)}
                            </MemberListText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                </MemberListWrapper>
            </Container>
        </ScrollView>
    );
}