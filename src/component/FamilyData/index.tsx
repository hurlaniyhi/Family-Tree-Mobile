import React, { useContext } from 'react'
import helpers from '@src/utility/helper'
import {  
    AppText, 
    ProfileDPContainer,
    ProfileDP
} from '@styles'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { images } from '@src/provider/config/constant'
import { Card, Button } from '@component'

export const FamilyData: React.FC<any> = ({ onPress, data }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <ProfileDPContainer>
                <ProfileDP source={images.FAMILY_PICS} />
            </ProfileDPContainer>
            <AppText fontSize="22" fontWeight="bold" justify="center">{helpers.textToDisplay("Kolawole Family", 20)}</AppText>
            <Card cardTopMargin="40" cardPadding="8">
                <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Family Name</AppText>
                <AppText fontWeight="bold" >{data.familyName}</AppText>
            </Card>
            <Card cardTopMargin="10" cardPadding="8">
                <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>HomeTown</AppText>
                <AppText fontWeight="bold">{data.homeTown}</AppText>
            </Card>
            <Card cardTopMargin="10" cardPadding="8">
                <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>State</AppText>
                <AppText fontWeight="bold">{data.state} State</AppText>
            </Card>
            <Card cardTopMargin="10" cardPadding="8">
                <AppText fontSize="12" textColor={theme.FOCUS_THEME_COLOR}>Country</AppText>
                <AppText fontWeight="bold">{data.country}</AppText>
            </Card>
            <Button 
                btnWidth="40" 
                text="View Members" 
                btnTopMargin="25" 
                btnBottomMargin="10" 
                btnHeight="40"
                btnTextSize="14"
                onPress={onPress}
            />
        </>
    );
}