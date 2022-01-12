import React, { useContext } from 'react'
import { ImageSourcePropType, ScrollView } from 'react-native'
import { CenterHorizontallyContainer, CompleteAccountTitle, ProfilePicture } from '@styles';
import { icons } from '@src/provider/config/constant'
import { Input, Button, FlowIndicator } from '@component'
import helpers from '@src/utility/helper'
import ThemeContext from '@src/provider/state-manager/themeProvider'

export const CompleteAccount: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    let userIcon: ImageSourcePropType = helpers.getUserIcon(theme)

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <CenterHorizontallyContainer>
                <CompleteAccountTitle>Complete Your Account</CompleteAccountTitle>
                <ProfilePicture source={userIcon} />
                <Input placeHolder="Address" icon={icons.ADDRESS} />
                <Input placeHolder="Date of Birth" icon={icons.DATE} />
                <Input placeHolder="Gender" icon={icons.GENDER} />
                <Button text="Continue" onPress={() => navigation.navigate("Dashboard")} />
                <FlowIndicator pageNumber={4} />
            </CenterHorizontallyContainer>
        </ScrollView>
    );
}