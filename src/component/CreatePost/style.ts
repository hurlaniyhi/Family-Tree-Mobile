import styled from 'styled-components/native'
import { Theme } from '@model'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'

export const CreatePostContainer = styled.View`
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 10000;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.4);
`
export const PostPopUp = styled.View<Theme>`
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY};
    width: 100%;
    height: 65%;
    position: absolute;
    bottom: 0px;
    left: 0px;
`
export const PostTitleBar = styled.View<Theme>`
    width: 100%;
    padding: 10px 15px 9px 15px;
    background: ${({theme}) => theme.THEME_MODE === 'light' ? '#F6F6F6' : theme.CARD_BACKGROUND};
`
export const PostBackIcon = styled(Feather).attrs(({theme}: Theme)=> ({
    color: theme.TEXT_COLOR,
    size: 24,
    name: 'arrow-left'
}))``

export const PostCheckIcon = styled(AntDesign).attrs(({theme}: Theme)=> ({
    color: theme.FOCUS_THEME_COLOR,
    size: 27,
    name: 'checkcircle'
}))``

export const PostCloseLine = styled.TouchableOpacity<Theme>`
    width: 56px;
    margin-right: auto;
    margin-left: auto;
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.BORDER};
    margin-bottom: 7px
`
export const PostContentContainer = styled.View<Theme>`
    width: 100%;
    height: 100%;
    padding: 5px 20px 10px 20px
`
export const PostContentWrapper = styled.View`
    width: 100%;
    height: 240px;
`
export const ChooseImageWrapper = styled.View<Theme>`
    width: 100%;
    height: 35px;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#F6F6F6' : theme.CARD_BACKGROUND};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    margin-top: 15px
`
export const MediaIcon = styled(MaterialIcons).attrs(({theme}: Theme)=> ({
    color: theme.FOCUS_THEME_COLOR,
    size: 20,
    name: 'perm-media'
}))`
    margin-right: 10px
`
export const PostTextInput = styled.TextInput.attrs((props: Theme) => ({
    placeholderTextColor: '#A6A6A6',
    color: props.theme.THEME_MODE === 'light'? props.theme.TEXT_COLOR : props.theme.BORDER,
    autoCapitalize: "none",
    multiline: true,
    placeholder: "Type post here...", 
    textAlignVertical: 'top',
    numberOfLines: 3
}))`
    width: 100%;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 5px 0px
`