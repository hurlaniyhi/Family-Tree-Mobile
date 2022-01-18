import React, { useContext, useState, useRef } from 'react'
import EmojiBoard from 'react-native-emoji-board'
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
    EnterChatWrapper,
    ChatInput
} from '@styles'
import { TextInput } from 'react-native';


export const Chat: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)
    const [input, setInput] = useState('')
    const [showEmoji, setShowEmoji] = useState(false)
    const inputRef: React.RefObject<TextInput> = React.createRef();

    const chatBackground = helpers.getChatBackground(theme)

    function handleEmojiBoard(emoji: any){
        inputRef.current!.focus()
        console.log(emoji.code)
        setInput(input+emoji.code)
        setShowEmoji(false)
    }

    return (
        <SafeAreaView>
            <Container>
                <BackgroundImage source={chatBackground} >
                    <ChatHeader>
                        <DataPictureWrapper customWidth="40" flexBottomMargin="0">
                            <FamDataPicture customWidth="40" source={icons.DP3} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <AppText fontSize="17" fontWeight="600">Imtiyaaz Ridwan</AppText>
                        </ChatMemberTextWrapper>
                    </ChatHeader>                 
                    <ChatsWrapper>
                        <ScrollView>
                        {
                            React.Children.toArray(
                                chatData.map(item => (
                                    item.chatId === 'me' ? 
                                    <RightChatWrapper>
                                        <ChatTextWrapper justify="right">
                                            <AppText fontSize="10">{item.chatText}</AppText>
                                            {/* <AppText fontSize="8">{item.time}</AppText> */}
                                        </ChatTextWrapper>
                                    </RightChatWrapper>
                                    :
                                    <LeftChatWrapper>
                                        <ChatTextWrapper>
                                            <AppText fontSize="10" >{item.chatText}</AppText>
                                            {/* <AppText fontSize="8" >{item.time}</AppText> */}
                                        </ChatTextWrapper>
                                    </LeftChatWrapper>
                                ))
                            )
                        }
                        </ScrollView>
                    </ChatsWrapper>
                    <EnterChatWrapper>
                        <ChatInputContainer>
                            <Fontisto name="smiley" color="#CFCECC" size={22} onPress={() => setShowEmoji(!showEmoji)} />
                            <ChatInput 
                                autoCapitalize="none"
                                value={input}
                                multiline={true}
                                autoCorrect={false}
                                placeholder="Message"
                                onChangeText={(e) => setInput(e)}
                                ref={inputRef}
                            />
                        </ChatInputContainer>
                        <ChatButton>
                            <Ionicons name="send-outline" color="#FFFFFF" size={20} />
                        </ChatButton>
                        <EmojiBoard showBoard={showEmoji} onClick={handleEmojiBoard} onRemove={() => setShowEmoji(false)} />
                    </EnterChatWrapper>
                </BackgroundImage>
            </Container>
        </SafeAreaView>
    );
}