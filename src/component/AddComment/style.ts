import styled from "styled-components/native";
import { Theme } from '@model'
import { Ionicons } from '@expo/vector-icons'

export const CommentContentContainer = styled.View<Theme>`
    width: 100%;
    height: 100%;
    padding: 5px 15px 10px 15px
`
export const EnterCommentWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 60px;
    left: 15px;
    right: 15px;
    height: 45px
`
export const CommentInputContainer = styled.View<Theme>`
    width: 86%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    margin-right: 2%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#F6F6F6' : theme.CARD_BACKGROUND}
`
export const CommentButton = styled.TouchableOpacity<Theme>`
    width: 12%;
    height: 40px;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CommentInput = styled.TextInput.attrs((props: Theme) => ({
    placeholderTextColor: props.theme.THEME_MODE === 'light' ? "rgba(0,0,0,0.3)" : "#8C8C8C",
    color: props.theme.TEXT_COLOR,
    placeholder: 'Write a comment'
  }))`
      width: 86%;
      height: 45px;
      font-size: 16px;
      padding: 0px 10px
  `
  export const SendChatIcon = styled(Ionicons).attrs(({theme}: Theme) => ({
    color: '#FFFFFF',
    size: 20,
    name: 'send-outline'
}))``

export const CommentContentWrapper = styled.View`
    width: 100%;
    height: 77%;
`
export const CommentViewWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px
`
export const CommentTextWrapper = styled.View<Theme>`
    margin-left: 2%;
    margin-right: 10%;
    padding: 5px 2%;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#F6F6F6' : theme.CARD_BACKGROUND};
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`