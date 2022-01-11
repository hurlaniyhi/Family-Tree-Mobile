import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { DarkTheme, LightTheme, Green, Purple, Yellow, Pink } from '@src/provider/config/theme'
import { AppTheme } from '@model'
import { Container, Card } from '@component'
import { AppText, MildText, FlexRow, SettingIcon, FlexRowBetween, Circle, LogoutText} from '@styles'


export  const Settings: React.FC<any> = ({ navigation }) => {

    const { switchTheme, switchMode } = useContext(ThemeContext)

    async function handleThemeSwitch(data: AppTheme|string) {
        await typeof data === "string" ? switchMode(data) : switchTheme(data)
    }

    return (
        <ScrollView>
            <Container>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">Account</AppText>
                    <FlexRow>
                        <SettingIcon source={require('@icons/user.png')}/>
                        <MildText>Profile</MildText>
                    </FlexRow>
                </Card>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">Preferences</AppText>
                    <FlexRowBetween>
                        <FlexRow flexWidth="50">
                            <SettingIcon source={require('@icons/theme.png')}/>
                            <MildText>Theme Modes</MildText>
                        </FlexRow>
                        <FlexRow justify="flex-end" flexWidth="50">
                            <Circle themeColor={LightTheme.CARD_BACKGROUND} onPress = {() => handleThemeSwitch(LightTheme.THEME_MODE)} />
                            <Circle themeColor={DarkTheme.BODY} onPress = {() => handleThemeSwitch(DarkTheme.THEME_MODE)} />
                        </FlexRow>
                    </FlexRowBetween>
                    <FlexRowBetween>
                        <FlexRow flexWidth="50">
                            <SettingIcon source={require('@icons/theme.png')}/>
                            <MildText>Themes</MildText>
                        </FlexRow>
                        <FlexRow justify="flex-end" flexWidth="50">
                            <Circle themeColor={Green.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Green)} />
                            <Circle themeColor={Purple.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Purple)} />
                            <Circle themeColor={Pink.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Pink)} />
                            <Circle themeColor={Yellow.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Yellow)} />
                        </FlexRow>
                    </FlexRowBetween>
                    <FlexRow>
                        <SettingIcon source={require('@icons/notification.png')}/>
                        <MildText>Notification Settings</MildText>
                    </FlexRow>
                </Card>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">FamTree</AppText>
                    <FlexRow>
                        <SettingIcon source={require('@icons/support.png')}/>
                        <MildText>Support</MildText>
                    </FlexRow>
                    <FlexRow>
                        <SettingIcon source={require('@icons/hash.png')}/>
                        <MildText>FamTree Community Forum</MildText>
                    </FlexRow>
                    <FlexRow>
                        <SettingIcon source={require('@icons/about.png')}/>
                        <MildText>About</MildText>
                    </FlexRow>
                </Card>
                <Card cardBottomMargin="20">
                    <FlexRow flexTopMargin="0">
                        <SettingIcon source={require('@icons/logout.png')}/>
                        <LogoutText onPress = {() => navigation.navigate("SignIn")}>Logout</LogoutText>
                    </FlexRow>
                </Card>
                {/* <Card>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(DarkTheme.THEME_MODE)}>Dark</AppText>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(LightTheme.THEME_MODE)}>Light</AppText>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(Green)}>Green</AppText>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(Purple)}>Purple</AppText>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(Yellow)}>Yellow</AppText>
                    <AppText fontWeight="500" onPress = {() => handleThemeSwitch(Pink)}>Pink</AppText>
                    <AppText fontWeight="500" onPress = {() => navigation.navigate("SignIn")}>Logout</AppText>
                </Card> */}
            </Container>
        </ScrollView>
    );
}