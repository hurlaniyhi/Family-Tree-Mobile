import styled from 'styled-components/native'
import { Theme } from '@model'
import { Feather, MaterialIcons } from '@expo/vector-icons'

export const SearchWrapper = styled.View<Theme>`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.THEME_MODE === 'light' ? '#F0F0F0': theme.CARD_BACKGROUND};
    margin-top: 20px;
    padding: 0px 15px;
    border-radius: 5px;
    margin-bottom: 15px
`
export const SearchInput = styled.TextInput.attrs((props: Theme) => ({
    placeholderTextColor: props.theme.BORDER,
    placeholder: 'Search',
    autoFocus: true,
    returnKeyType: 'search',
    color: props.theme.THEME_MODE === 'light'? props.theme.TEXT_COLOR : props.theme.BORDER
}))`
    width: 73%;
    height: 40px;
    padding: 5px 2% 5px 10%;
    font-size: 17px;
    font-family: Poppins;
    font-weight: 600;
    padding-top: 10px;
`
export const SearchIcon = styled(Feather).attrs({
    color: '#CFCECC',
    size: 20,
    name: 'search'
})`
    position: absolute;
    left: 15px;
    top: 10px
`
export const SearchTypeWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9
})<Theme>`
    width: 27%;
    display: flex;
    flex-direction: row
    align-items: center;
    padding-left: 14px;
    border-left-width: 1px;
    border-left-color: ${({theme}) => theme.BORDER}
`
export const SearchArrowDown = styled(MaterialIcons).attrs((props: Theme) => ({
    color: props.theme.BORDER,
    size: 20,
    name: 'keyboard-arrow-down'
}))`
    position: absolute;
    top: 10px;
    right: 15px
`
export const SearchedDataContainer = styled.View<Theme>`
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const ActionInfoWrapper = styled.View<Theme>`
    width: 70%;
    margin-left: 10px;
    margin-top: 0px
`
export const ActionButtonWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px
`
export const FillButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})<Theme>`
    width: 48.5%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.FOCUS_THEME_COLOR};
    border-radius: 5px;
`
export const OutlineButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})<Theme>`
    width: 48.5%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.FOCUS_THEME_COLOR}
`