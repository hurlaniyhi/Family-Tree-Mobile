import React, { useContext, useState, useEffect } from 'react'
import { BackHandler, Keyboard } from 'react-native'
import { 
    AppSafeAreaView, 
    AppText, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon, 
    SearchTypeWrapper,
    SearchArrowDown,
    ScrollView,
    DataPictureWrapper,
    FamDataPicture,
    SearchedDataContainer,
    ActionInfoWrapper,
    ActionButtonWrapper,
    FillButton,
    OutlineButton
} from '@styles';
import { Container, Card, SearchTypeOptions, Button } from '@component'
import { icons } from '@src/provider/config/constant'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'


export const SearchPage: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { visibility, toggleSearchType } = useContext(VisibilityContext)
    const { user, signUp, searchFamilyByFamilyName, searchUserFamilyByUserName } = useContext(UserContext)

    const [searchType, setSearchType] = useState('Family')
    const [input, setInput] = useState('')

    useEffect(()=> {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
        }
    }, [visibility])

    function handleBackPress(): any{
        if(visibility.isSearchType) {
            toggleSearchType(false)
            return true
        }
    }

    function handleSearchTypePopUp() {
        Keyboard.dismiss()
        toggleSearchType(true)
    }

    function handleSubmit () {
        if(!input || !searchType) return false

        if(searchType === 'Family') searchFamilyByFamilyName(input)
        else searchUserFamilyByUserName(input)
    }

    var count = 0
    var families = React.Children.toArray(
        user?.searchedFamilies.map((family: any) => {
            count++
            const val = count === user.searchedFamilies.length ? '10' : undefined
            return (
                <Card cardPadding="10"cardTopMargin="10" cardBottomMargin={val} >
                    <SearchedDataContainer>
                        <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                            <FamDataPicture customWidth="80" source={icons.DP3} />
                        </DataPictureWrapper>
                        <ActionInfoWrapper>
                            <AppText fontSize="16" fontWeight="900">{family.familyData.familyName} Family</AppText>
                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">{family.familyMembers.length} Member(s)</AppText>
                            <ActionButtonWrapper>
                                { !user.token ? <FillButton onPress={() => signUp(user.userData, navigation, family.familyData._id)}>
                                    <AppText fontSize="12" textColor="#FFFFFF">Set as Family</AppText>
                                </FillButton> : null}
                                { !user.token ? <OutlineButton onPress={() => navigation.navigate('Others', 
                                    {
                                        screen: 'FamilyMembers', 
                                        params: family.familyMembers
                                    }
                                )}>
                                    <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                </OutlineButton>
                                : 
                                <Button 
                                    btnWidth="65" 
                                    text="View Members" 
                                    btnTopMargin="15" 
                                    btnBottomMargin="0" 
                                    btnHeight="35"
                                    btnTextSize="12"
                                    onPress={() => navigation.navigate('Others', 
                                        {
                                            screen: 'FamilyMembers',
                                            params: family.familyMembers
                                        }
                                    )}
                                />
                                }
                            </ActionButtonWrapper >
                        </ActionInfoWrapper>
                    </SearchedDataContainer>
                </Card>
            )
        })
    )

    var userCount = 0
    var users = React.Children.toArray(
        user?.searchedUsers.map((item: any) => {
            userCount++
            const val = userCount === user.searchedUsers.length ? '10' : undefined
            return (
                <Card cardPadding="10" cardTopMargin="10">
                    <SearchedDataContainer>
                        <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                            <FamDataPicture customWidth="80" source={{uri: item.userData.profilePicture}} />
                        </DataPictureWrapper>
                        <ActionInfoWrapper>
                            <AppText fontSize="16" fontWeight="900">{`${item.userData.firstName} ${item.userData.lastName}`}</AppText>
                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">{item.userData.email}</AppText>
                            <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">{item.familyData.familyName} Family</AppText>
                            <ActionButtonWrapper>
                                <FillButton onPress={() => navigation.navigate('Others', 
                                    {
                                        screen: 'Profile', 
                                        params: item.userData
                                    })}>
                                    <AppText fontSize="12" textColor="#FFFFFF">View Profile</AppText>
                                </FillButton>
                                <OutlineButton onPress={() => navigation.navigate('Others', 
                                    {
                                        screen: 'FamilyMembers', 
                                        params: item.familyMembers
                                    }
                                )}>
                                    <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                </OutlineButton>
                            </ActionButtonWrapper >
                        </ActionInfoWrapper>
                    </SearchedDataContainer>
                </Card>
            )
        })
    )


    return (
        <AppSafeAreaView>
            <Container>

                { visibility.isSearchType ? <SearchTypeOptions onPress={(data: string)=> setSearchType(data)} /> : null}

                {   user.token ? 
                    <SearchWrapper>
                        <SearchIcon onPress={handleSubmit} />
                        <SearchInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={input}
                            onChangeText={(data) => setInput(data)}
                            onSubmitEditing={handleSubmit}
                        />
                        <SearchTypeWrapper onPress={handleSearchTypePopUp}>
                            <AppText fontSize="14">{searchType}</AppText>
                        </SearchTypeWrapper>
                        <SearchArrowDown onPress={handleSearchTypePopUp} />
                    </SearchWrapper> : null
                }
                <ScrollView>
                   { searchType === 'Family' ? 
                    <>
                        {user.searchedFamilies.length ? families : null}
                    </> :
                    <>
                        {user.searchedUsers.length ? users : null}
                    </>}
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}