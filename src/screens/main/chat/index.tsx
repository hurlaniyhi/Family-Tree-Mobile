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
    Header,  
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
import { TextInput, Keyboard } from 'react-native';


export const Chat: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)
    const [chats, setChats] = useState<typeof chatData>(chatData)
    const [input, setInput] = useState<string>('')
    const [showEmoji, setShowEmoji] = useState<boolean>(false)
    const inputRef: React.RefObject<TextInput> = React.createRef();

    const chatBackground = helpers.getChatBackground(theme)

    function handleEmojiBoard(emoji: any){
        inputRef.current!.focus()
        setInput(input+emoji.code)
        setShowEmoji(false)
    }

    function toggleKeyboards(){
        Keyboard.dismiss()
        setShowEmoji(true)
    }

    function sendChat(){
        Keyboard.dismiss()
        const newChat = {
            chatText: input,
            time: new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
            chatId: 'me'
        }
        setInput('')
        setChats([...chats, newChat])
    }

    return (
        <SafeAreaView>
            <Container>
                <BackgroundImage source={chatBackground}>
                    <Header>
                        <DataPictureWrapper customWidth="40" flexBottomMargin="0">
                            <FamDataPicture customWidth="40" source={icons.DP3} />
                            <MemberStatusCircle flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper textMargin="14">
                            <AppText fontSize="17" fontWeight="600">Imtiyaaz Ridwan</AppText>
                        </ChatMemberTextWrapper>
                    </Header>                 
                    <ChatsWrapper>
                        <ScrollView>
                        {
                            React.Children.toArray(
                                chats.map(item => (
                                    item.chatId === 'me' ? 
                                    <RightChatWrapper>
                                        <ChatTextWrapper justify="right">
                                            <AppText fontSize="12">{item.chatText}</AppText>
                                            {/* <AppText fontSize="8">{item.time}</AppText> */}
                                        </ChatTextWrapper>
                                    </RightChatWrapper>
                                    :
                                    <LeftChatWrapper>
                                        <ChatTextWrapper>
                                            <AppText fontSize="12" >{item.chatText}</AppText>
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
                            <Fontisto name="smiley" color={theme.THEME_MODE === 'light' ? "rgba(0,0,0,0.3)" : "#8C8C8C"} size={22} onPress={toggleKeyboards} />
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
                        <ChatButton activeOpacity={0.8} onPress={sendChat}>
                            <Ionicons name="send-outline" color="#FFFFFF" size={20} />
                        </ChatButton>
                        <EmojiBoard 
                            showBoard={showEmoji} 
                            onClick={handleEmojiBoard} 
                            onRemove={() => setShowEmoji(false)} 
                            containerStyle={{backgroundColor: theme.THEME_MODE === 'light' ? '#FFFFFF' : '#121212'}}
                            />
                    </EnterChatWrapper>
                </BackgroundImage>
            </Container>
        </SafeAreaView>
    );
}