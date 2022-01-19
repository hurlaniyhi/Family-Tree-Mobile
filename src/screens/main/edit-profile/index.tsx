import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Card } from '@component'
import helpers from '@src/utility/helper'
import { 
    ProfileHeader, 
    AppText, 
    ProfileDPContainer,
    ScrollView,
    ProfileDP,
    TouchableOpacity,
    CameraWrapper,
    DesignedInputContainer,
    DesignedInputIcon,
    DesignedTextInput,
    AddButtonWrapper,
    Text_IconWrapper,
    RemoveButton
} from '@styles'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { icons } from '@src/provider/config/constant'


export const EditProfile: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <SafeAreaView>
            <Container>
                <ScrollView>
                    <ProfileHeader>
                        <AppText fontSize="22" fontWeight="bold">Edit Profile</AppText>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Ionicons name="checkmark" size={25} color={theme.TEXT_COLOR} />
                        </TouchableOpacity>
                    </ProfileHeader>
                    <ProfileDPContainer>
                        <ProfileDP source={icons.DP3} />
                        <CameraWrapper activeOpacity={0.8}>
                            <Ionicons name="camera-outline" size={18} color="#FFFFFF" />
                        </CameraWrapper>
                    </ProfileDPContainer>
                    <Card cardTopMargin="35" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.NAME} />
                            <DesignedTextInput 
                                placeholder="Full Name"
                                value="Imtiyaaz Ridwan"
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.CALL} />
                            <DesignedTextInput 
                                placeholder="Phone Number"
                                value="07087994127"
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.MAIL} />
                            <DesignedTextInput 
                                placeholder="Email"
                                value="olaniyi.jibola152@gmail.com"
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.MAIL} />
                            <DesignedTextInput 
                                placeholder="Address"
                                value="21, Sari Iganmu, orile, Lagos"
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.NAME} />
                            <DesignedTextInput 
                                placeholder="Add Child"
                            />
                            <AddButtonWrapper activeOpacity={0.8}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        <Text_IconWrapper>
                            <AppText fontSize="15">Roshan</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                        <Text_IconWrapper>
                            <AppText fontSize="15">Diyaah</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                    </Card>

                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EDUCATION} />
                            <DesignedTextInput 
                                placeholder="Add Education"
                            />
                            <AddButtonWrapper activeOpacity={0.8}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Kwara State University.", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Kwara State Polytechnic.", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                    </Card>

                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EXPERIENCE} />
                            <DesignedTextInput 
                                placeholder="Add Work Experience"
                            />
                            <AddButtonWrapper activeOpacity={0.8}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Software Engineer, Access Bank.", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Software Engineer, Newcore Technologies.", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                    </Card>

                    <Card cardTopMargin="15" cardBottomMargin="10" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EDUCATION} />
                            <DesignedTextInput 
                                placeholder="Add Interest"
                            />
                            <AddButtonWrapper activeOpacity={0.8}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Programming", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Football", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                        <Text_IconWrapper>
                            <AppText fontSize="14">{helpers.textToDisplay("Game", 40)}</AppText>
                            <RemoveButton>
                                <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                            </RemoveButton>
                        </Text_IconWrapper>
                    </Card>
                </ScrollView>
            </Container>
        </SafeAreaView>
    );
}