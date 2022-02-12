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
    const { user } = useContext(UserContext)

    const [searchType, setSearchType] = useState('Family')

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
                                <FillButton>
                                    <AppText fontSize="12" textColor="#FFFFFF">Set as Family</AppText>
                                </FillButton>
                                <OutlineButton onPress={() => navigation.navigate('Others', 
                                    {
                                        screen: 'FamilyMembers', 
                                        params: family.familyMembers
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
                        <SearchIcon/>
                        <SearchInput
                            autoCapitalize="none"
                            autoCorrect={false}
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
                    <Card cardPadding="10" cardTopMargin="10">
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                                <FamDataPicture customWidth="80" source={icons.DP} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="16" fontWeight="900">Akachukwu Ajulibe</AppText>
                                <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">olaniyi.jibola152@gmail.com</AppText>
                                <Button 
                                    btnWidth="65" 
                                    text="View Profile" 
                                    btnTopMargin="15" 
                                    btnBottomMargin="0" 
                                    btnHeight="35"
                                    btnTextSize="12"
                                    onPress={() => navigation.navigate('Others', {screen: 'Profile'})}
                                />
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                    <Card cardPadding="10" cardTopMargin="10" cardBottomMargin="10">
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="80" flexBottomMargin="0">
                                <FamDataPicture customWidth="80" source={icons.DP3} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="16" fontWeight="900">Imtiyaaz Ridwan</AppText>
                                <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">devrhydhur@gmail.com</AppText>
                                <Button 
                                    btnWidth="65" 
                                    text="View Profile" 
                                    btnTopMargin="15" 
                                    btnBottomMargin="0" 
                                    btnHeight="35"
                                    btnTextSize="12"
                                    onPress={() => console.log("Viewed")}
                                />
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                    </>}
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}