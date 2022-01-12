import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { DarkTheme, LightTheme, Green, Purple, Yellow, Pink } from '@src/provider/config/theme'
import { AppTheme } from '@model'
import { Container, Card } from '@component'
import { icons, initialState } from '@src/provider/config/constant'
import { AppText, MildText, FlexRow, SettingIcon, FlexRowBetween, Circle, LogoutText} from '@styles'
import { Feather } from '@expo/vector-icons'


export  const Settings: React.FC<any> = ({ navigation }) => {
    const {theme, switchTheme, switchMode} = useContext(ThemeContext)
    const [themeStatus, setThemeStatus] = useState<typeof initialState.THEME>({...initialState.THEME, [theme.THEME]: true})
    const [modeStatus, setModeStatus] = useState<typeof initialState.THEME_MODE>({...initialState.THEME_MODE, [theme.THEME_MODE]: true})

    async function handleThemeSwitch(data: AppTheme|string) {
        if(typeof data === "string"){
            setModeStatus({ ...initialState.THEME_MODE, [data]: true })
            await switchMode(data)
        }
        else{
            setThemeStatus({ ...initialState.THEME, [data.THEME]: true })
            await switchTheme(data)
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">Account</AppText>
                    <FlexRow>
                        <SettingIcon source={icons.USER}/>
                        <MildText>Profile</MildText>
                    </FlexRow>
                </Card>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">Preferences</AppText>
                    <FlexRowBetween>
                        <FlexRow flexWidth="50">
                            <SettingIcon source={icons.THEME}/>
                            <MildText>Theme Modes</MildText>
                        </FlexRow>
                        <FlexRow justify="flex-end" flexWidth="50">
                            <Circle activeOpacity={0.8} themeColor={LightTheme.CARD_BACKGROUND} onPress = {() => handleThemeSwitch(LightTheme.THEME_MODE)}>
                                { modeStatus.light ? <Feather name="check" size={15} color="#000000" /> : null }
                            </Circle>
                            <Circle activeOpacity={0.8} themeColor={DarkTheme.BODY} onPress = {() => handleThemeSwitch(DarkTheme.THEME_MODE)}>
                                { modeStatus.dark ? <Feather name="check" size={15} color="#ffffff"/> : null }
                            </Circle>
                        </FlexRow>
                    </FlexRowBetween>
                    <FlexRowBetween>
                        <FlexRow flexWidth="50">
                            <SettingIcon source={icons.THEME}/>
                            <MildText>Themes</MildText>
                        </FlexRow>
                        <FlexRow justify="flex-end" flexWidth="50">
                            <Circle activeOpacity={0.8} themeColor={Green.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Green)} >
                                { themeStatus.green ? <Feather name="check" size={15} color="#ffffff" /> : null }
                            </Circle>
                            <Circle activeOpacity={0.8} themeColor={Purple.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Purple)}>
                                { themeStatus.purple ? <Feather name="check" size={15} color="#ffffff" /> : null}
                            </Circle>
                            <Circle activeOpacity={0.8} themeColor={Pink.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Pink)}>
                                { themeStatus.pink ? <Feather name="check" size={15} color="#ffffff" /> : null}
                            </Circle>
                            <Circle activeOpacity={0.8} themeColor={Yellow.FOCUS_THEME_COLOR} onPress = {() => handleThemeSwitch(Yellow)}>
                                { themeStatus.yellow ? <Feather name="check" size={15} color="#ffffff" /> : null}
                            </Circle>
                        </FlexRow>
                    </FlexRowBetween>
                    <FlexRow>
                        <SettingIcon source={icons.NOTIFICATION}/>
                        <MildText>Notification Settings</MildText>
                    </FlexRow>
                </Card>
                <Card cardTopMargin="25">
                    <AppText fontWeight="600" fontSize="20">FamTree</AppText>
                    <FlexRow>
                        <SettingIcon source={icons.SUPPORT}/>
                        <MildText>Support</MildText>
                    </FlexRow>
                    <FlexRow>
                        <SettingIcon source={icons.HASH}/>
                        <MildText>FamTree Community Forum</MildText>
                    </FlexRow>
                    <FlexRow>
                        <SettingIcon source={icons.ABOUT}/>
                        <MildText>About</MildText>
                    </FlexRow>
                </Card>
                <Card cardBottomMargin="20">
                    <FlexRow flexTopMargin="0">
                        <SettingIcon source={icons.LOGOUT}/>
                        <LogoutText onPress = {() => navigation.navigate("SignIn")}>Logout</LogoutText>
                    </FlexRow>
                </Card>
            </Container>
        </ScrollView>
    );
}