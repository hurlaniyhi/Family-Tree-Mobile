import React, { useContext, useState, useEffect } from 'react'
import { BackHandler } from 'react-native'
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
import { Container, Card, SearchTypeOptions } from '@component'
import { icons } from '@src/provider/config/constant'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'


export const SearchPage: React.FC<any> = () => {
    const { theme } = useContext(ThemeContext)
    const { visibility, toggleSearchType } = useContext(VisibilityContext)
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

    return (
        <AppSafeAreaView>
            <Container>

                { visibility.isSearchType ? <SearchTypeOptions onPress={(data: string)=> setSearchType(data)} /> : null}

                <SearchWrapper>
                    <SearchIcon/>
                    <SearchInput
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <SearchTypeWrapper onPress={() => toggleSearchType(true)}>
                        <AppText fontSize="14">{searchType}</AppText>
                    </SearchTypeWrapper>
                    <SearchArrowDown onPress={() => toggleSearchType(true)} />
                </SearchWrapper>
                <ScrollView>
                    <Card cardPadding="10"cardTopMargin="10" >
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="90" flexBottomMargin="0">
                                <FamDataPicture customWidth="90" source={icons.DP3} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="18" fontWeight="900">Kolawole Family</AppText>
                                <AppText fontSize="14" textColor="#A6A6A6" fontWeight="500">10 Members</AppText>
                                <ActionButtonWrapper>
                                    <FillButton>
                                        <AppText fontSize="13" textColor="#FFFFFF">Set as Family</AppText>
                                    </FillButton>
                                    <OutlineButton>
                                        <AppText fontSize="13" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                    </OutlineButton>
                                </ActionButtonWrapper >
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                    <Card cardPadding="10" cardTopMargin="10">
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="90" flexBottomMargin="0">
                                <FamDataPicture customWidth="90" source={icons.DP4} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="18" fontWeight="900">Aweda Family</AppText>
                                <AppText fontSize="14" textColor="#A6A6A6" fontWeight="500">15 Members</AppText>
                                <ActionButtonWrapper>
                                    <FillButton>
                                        <AppText fontSize="13" textColor="#FFFFFF">Set as Family</AppText>
                                    </FillButton>
                                    <OutlineButton>
                                        <AppText fontSize="13" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                    </OutlineButton>
                                </ActionButtonWrapper >
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                    <Card cardPadding="10" cardTopMargin="10">
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="90" flexBottomMargin="0">
                                <FamDataPicture customWidth="90" source={icons.DP2} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="18" fontWeight="900">Olanrewaju Family</AppText>
                                <AppText fontSize="14" textColor="#A6A6A6" fontWeight="500">8 Members</AppText>
                                <ActionButtonWrapper>
                                    <FillButton>
                                        <AppText fontSize="13" textColor="#FFFFFF">Set as Family</AppText>
                                    </FillButton>
                                    <OutlineButton>
                                        <AppText fontSize="13" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                    </OutlineButton>
                                </ActionButtonWrapper >
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                    <Card cardPadding="10" cardTopMargin="10">
                        <SearchedDataContainer>
                            <DataPictureWrapper customWidth="90" flexBottomMargin="0">
                                <FamDataPicture customWidth="90" source={icons.DP} />
                            </DataPictureWrapper>
                            <ActionInfoWrapper>
                                <AppText fontSize="18" fontWeight="900">Ajulibe Family</AppText>
                                <AppText fontSize="14" textColor="#A6A6A6" fontWeight="500">6 Members</AppText>
                                <ActionButtonWrapper>
                                    <FillButton>
                                        <AppText fontSize="13" textColor="#FFFFFF">Set as Family</AppText>
                                    </FillButton>
                                    <OutlineButton>
                                        <AppText fontSize="13" textColor={theme.FOCUS_THEME_COLOR}>View Members</AppText>
                                    </OutlineButton>
                                </ActionButtonWrapper >
                            </ActionInfoWrapper>
                        </SearchedDataContainer>
                    </Card>
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}