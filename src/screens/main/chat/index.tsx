import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '@component'
import helpers from '@src/utility/helper'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { icons, chatData } from '@src/provider/config/constant'
import { 
    BackgroundImage, 
    ChatHeader,  
    FamDataPicture,
    ChatMemberTextWrapper,
    MemberStatusCircle,
    DataPictureWrapper,
    AppText,
    LeftChatWrapper,
    RightChatWrapper,
    ChatTextWrapper,
    ScrollView,
    ChatsWrapper,
    ChatButton,
    ChatInputContainer,
    EnterChatWrapper
} from '@styles'


export const Chat: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)

    const chatBackground = helpers.getChatBackground(theme)

    return (
        <SafeAreaView>
            <Container>
                <BackgroundImage style={{zIndex: 10}} source={chatBackground} >
                    <ChatHeader>
                        <DataPictureWrapper customWidth="40" flexBottomMargin="0">
                            <FamDataPicture customWidth="40" source={icons.DP3} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <AppText fontSize="17" fontWeight="600">Imtiyaaz Ridwan</AppText>
                        </ChatMemberTextWrapper>
                    </ChatHeader>                 
                    <ScrollView >
                        <ChatsWrapper>
                        {
                            React.Children.toArray(
                                chatData.map(item => (
                                    item.chatId === 'me' ? 
                                    <RightChatWrapper>
                                        <ChatTextWrapper justify="right">
                                            <AppText fontSize="10">{item.chatText}</AppText>
                                            <AppText fontSize="8">{item.time}</AppText>
                                        </ChatTextWrapper>
                                    </RightChatWrapper>
                                    :
                                    <LeftChatWrapper>
                                        <ChatTextWrapper>
                                            <AppText fontSize="10" >{item.chatText}</AppText>
                                            <AppText fontSize="8" >{item.time}</AppText>
                                        </ChatTextWrapper>
                                    </LeftChatWrapper>
                                ))
                            )
                        }
                        </ChatsWrapper>
                    </ScrollView>
                    <EnterChatWrapper>
                        <ChatInputContainer>
                        <Fontisto name="smiley" color="#CFCECC" size={22} />
                        </ChatInputContainer>
                        <ChatButton>
                            <Ionicons name="send-outline" color="#FFFFFF" size={20} />
                        </ChatButton>
                    </EnterChatWrapper>
                </BackgroundImage>
            </Container>
        </SafeAreaView>
    );
}