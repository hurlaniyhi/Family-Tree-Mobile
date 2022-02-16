import React, { useContext } from 'react'
import { Container, Card } from '@component'
import helpers from '@src/utility/helper'
import { 
    ProfileHeader, 
    AppText, 
    ProfileDPContainer,
    ScrollView,
    ProfileDP,
    TouchableOpacity,
    AppSafeAreaView
} from '@styles'
import { SimpleLineIcons } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'


export const Profile: React.FC<any> = (props) => {
    const { theme } = useContext(ThemeContext)
    const { user } = useContext(UserContext)

    const profile =  props.route.params ? props.route.params : user.userData
    
    return (
        <AppSafeAreaView>
            <Container>
                <ScrollView>
                    <ProfileHeader>
                        <AppText fontSize="22" fontWeight="bold">Profile</AppText>
                       { user.token ?
                            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Others', { screen: 'EditProfile'})}>
                                <SimpleLineIcons name="pencil" size={20} color={theme.TEXT_COLOR} />
                            </TouchableOpacity>
                            : null
                        }
                    </ProfileHeader>
                    <ProfileDPContainer>
                        <ProfileDP source={{uri: profile.profilePicture}} />
                    </ProfileDPContainer>
                    <AppText fontSize="22" fontWeight="bold" justify="center">{`${profile.firstName} ${profile.lastName}`}</AppText>
                    { user.token ? <AppText fontSize="14" justify="center" textColor={theme.FOCUS_THEME_COLOR} onPress={() => props.navigation.navigate("EnterEmail")}>
                        Forget Password?
                    </AppText>: null}
                    <Card cardTopMargin="40" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Phone Number</AppText>
                        <AppText fontWeight="bold" >{profile.phoneNumber}</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Email</AppText>
                        <AppText fontWeight="bold">{profile.email}</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Father</AppText>
                        <AppText fontWeight="bold">{`${profile.fatherName} | ${profile.fatherPhoneNo}`}</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Mother</AppText>
                        <AppText fontWeight="bold">{`${profile.motherName} | ${profile.motherPhoneNo}`}</AppText>
                    </Card>
                    {profile.children ? 
                        <Card cardTopMargin="10" cardPadding="8">
                            <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Children</AppText>
                            {
                                React.Children.toArray(profile.children.map((child: any) => {
                                    return (
                                        <AppText fontWeight="bold">{child.name}</AppText>
                                    )
                                }))
                            }
                        </Card> : null
                    }
                    {profile.education ? 
                        <Card cardTopMargin="10" cardPadding="8">
                            <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Education</AppText>
                            {
                                React.Children.toArray(profile.education.map((item: any) => {
                                    return (
                                        <AppText fontWeight="bold">{helpers.textToDisplay(`${item}.`, 50)}</AppText>
                                    )
                                }))
                            }
                        </Card> : null
                    }
                     {profile.workExperience ? 
                        <Card cardTopMargin="10" cardPadding="8">
                            <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Work Experience</AppText>
                            {
                                React.Children.toArray(profile.workExperience.map((item: any) => {
                                    return (
                                        <AppText fontWeight="bold">{helpers.textToDisplay(`${item}.`, 50)}</AppText>
                                    )
                                }))
                            }
                        </Card> : null
                    }
                    {profile.interest ? 
                        <Card cardTopMargin="10" cardPadding="8" cardBottomMargin="15">
                            <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Interest</AppText>
                            {
                                React.Children.toArray(profile.interest.map((item: any) => {
                                    return (
                                        <AppText fontWeight="bold">{helpers.textToDisplay(`${item}.`, 50)}</AppText>
                                    )
                                }))
                            }
                        </Card> : null
                    }
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}