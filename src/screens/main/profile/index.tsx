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
import { icons } from '@src/provider/config/constant'



export const Profile: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <AppSafeAreaView>
            <Container>
                <ScrollView>
                    <ProfileHeader>
                        <AppText fontSize="22" fontWeight="bold">Profile</AppText>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Others', { screen: 'EditProfile'})}>
                            <SimpleLineIcons name="pencil" size={20} color={theme.TEXT_COLOR} />
                        </TouchableOpacity>
                    </ProfileHeader>
                    <ProfileDPContainer>
                        <ProfileDP source={icons.DP3} />
                    </ProfileDPContainer>
                    <AppText fontSize="22" fontWeight="bold" justify="center">Imtiyaaz Ridwan</AppText>
                    <AppText fontSize="14" justify="center" textColor={theme.FOCUS_THEME_COLOR} onPress={() => navigation.navigate("EnterEmail")}>Forget Password?</AppText>
                    <Card cardTopMargin="40" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Phone Number</AppText>
                        <AppText fontWeight="bold" >07087994127</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Email</AppText>
                        <AppText fontWeight="bold">olaniyi.jibola152@gmail.com</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Father</AppText>
                        <AppText fontWeight="bold">Ridwan | 08156170991</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Mother</AppText>
                        <AppText fontWeight="bold">Rasheedah | 08156170991</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Children</AppText>
                        <AppText fontWeight="bold">Roshan</AppText>
                        <AppText fontWeight="bold">Diyaah</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Education</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Kwara State University.", 50)}</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Kwara State Polytechnic.", 50)}</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Work Experience</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Software Engineer, Access Bank.", 50)}</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Software Engineer, Newcore Technologies.", 50)}</AppText>
                    </Card>
                    <Card cardTopMargin="10" cardPadding="8" cardBottomMargin="15">
                        <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Interest</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Programming.", 50)}</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Football", 50)}</AppText>
                        <AppText fontWeight="bold">{helpers.textToDisplay("Game", 50)}</AppText>
                    </Card>
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}