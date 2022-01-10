import React, { useContext } from 'react'
import { Text } from 'react-native'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkTheme, LightTheme, Green, Purple, Yellow, Pink } from '@src/provider/config/theme'
import { AppTheme } from '@model'


export  const Settings: React.FC<any> = ({ navigation }) => {

    const { switchTheme, switchMode } = useContext(ThemeContext)

    async function handleThemeSwitch(data: AppTheme|string) {
        await typeof data === "string" ? switchMode(data) : switchTheme(data)
    }
    return (
        <SafeAreaView>
            <Text>This is Settings screen</Text>
            <Text onPress = {() => handleThemeSwitch(DarkTheme.THEME_MODE)}>Dark</Text>
            <Text onPress = {() => handleThemeSwitch(LightTheme.THEME_MODE)}>Light</Text>
            <Text onPress = {() => handleThemeSwitch(Green)}>Green</Text>
            <Text onPress = {() => handleThemeSwitch(Purple)}>Purple</Text>
            <Text onPress = {() => handleThemeSwitch(Yellow)}>Yellow</Text>
            <Text onPress = {() => handleThemeSwitch(Pink)}>Pink</Text>
            <Text onPress = {() => navigation.navigate("SignIn")}>Logout</Text>
        </SafeAreaView>
    );
}