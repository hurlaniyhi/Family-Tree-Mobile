import styled from 'styled-components/native'
import { Theme } from '@model'

export const DashboardText = styled.Text<Theme>`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 100px;
    text-align: center;
    color: ${({theme}) => theme.TEXT_COLOR}
`
export const ScrollView = styled.ScrollView.attrs(
    (props) => ({ 
        contentContainerStyle: { flexGrow: 1 }   
    })
)`
`
export const UserIntroWrapper = styled.View`
    width: 100%;
    padding: 0px 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px
`
export const ProfilePicsWrapper = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: #C4C4C4
`
export const Picture = styled.Image`
    resize-mode: cover;
    width: 50px;
    height: 50px;
    border-radius: 100px
`
export const ParentChildContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`
export const SubContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 47%;
`
export const DataProfileWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 15px
`
export const DataProfileChild = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 47%;
`
export const DataPictureWrapper = styled.View<Theme>`
    width: ${({customWidth}) => customWidth || 66}px;
    height: ${({customWidth}) => customWidth || 66}px;
    border-radius: 100px;
    background-color: #C4C4C4;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin || 10}px
`
export const FamDataPicture = styled.Image<Theme>`
    resize-mode: cover;
    width: ${({customWidth}) => customWidth || 66}px;
    height: ${({customWidth}) => customWidth || 66}px;
    border-radius: 100px
`
export const StatusCircle = styled.View<Theme>`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    border: 1px solid ${({theme}) => theme.THEME_MODE === "light" ? '#FFFFFF' : theme.CARD_BACKGROUND};
    background-color: ${({flowCircleColor}) => flowCircleColor};
    position: absolute;
    bottom: 3px;
    right: 3px
`
export const ChatListWrapper = styled.TouchableOpacity<Theme>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${({flexTopMargin}) => flexTopMargin || 10}px;
    margin-bottom: ${({flexBottomMargin}) => flexBottomMargin || 0}px;
`
export const ChatMemberTextWrapper = styled.View<Theme>`
    margin-left: ${({textMargin}) => textMargin || 10}px;
    margin-top: 2px
`

export const StatusCircleSm = styled.View<Theme>`
    width: 6px;
    height: 6px;
    border-radius: 100px;
    border: 1px solid ${({theme}) => theme.THEME_MODE === "light" ? '#FFFFFF' : theme.CARD_BACKGROUND};
    background-color: ${({flowCircleColor}) => flowCircleColor};
    position: absolute;
    bottom: 0px;
    right: 2px
`
export const SearchContainer = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const SearchText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #CFCECC;
    padding-top: 0px;
    padding-left: 20px
`

export const PostContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
    margin-top: 15px

`

export const PostImage = styled.Image`
    resize-mode: stretch;
    width: 100%;
    height: 144px;
    margin-bottom: 10px;
    margin-top: 8px
`
export const AddPostButton = styled.TouchableOpacity.attrs((props: Theme)=> ({
    activeOpacity: 0.8
}))`
    position: absolute;
    bottom: 40px;
    right: 20px;
    z-index: 10;
    background-color: #FFFFFF;
    border-radius: 100px
`