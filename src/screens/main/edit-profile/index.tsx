import React, { useContext, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Card, Button } from '@component'
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
    RemoveButton,
    AppSafeAreaView
} from '@styles'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { icons, initialState } from '@src/provider/config/constant'
import { ExtraDataKey, ExtraUserData, UserData } from '@model';
import validator from '@src/utility/inputValidator'


export const EditProfile: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { user, editUser, uploadPicture } = useContext(UserContext)
    const [input, setInput] = useState<UserData>(user.userData)
    const [extraInput, setExtraInput] = useState<ExtraUserData>(initialState.EXTRA_USER_DATA)
    var [childIndex, educationIndex, workExperienceIndex, interestIndex] = [0, 0, 0, 0]

    function handleInput (data: string, name: string): void {
        setInput({...input, [name]: data})
    }

    function handleExtraInput (data: string, name: string): void {
        setExtraInput({...extraInput, [name]: data})
    }

    function handleAddData (name: ExtraDataKey): void {
        if (extraInput[name]) {
            const sortedData = helpers.addUserDataEdit(input, extraInput[name], name)
            setInput(sortedData)
            setExtraInput(initialState.EXTRA_USER_DATA)
        }
    }

    function handleRemoveData (name: ExtraDataKey, index: number) {
        const sortedData = helpers.removeUserDataEdit(input, name, index)
        setInput(sortedData)
    }

    async function handleImageSelection () {
        const picture = await uploadPicture()
        setInput({...input, profilePicture: picture})
     }

    async function handleSubmit(){
        const isValidated = validator.userData(input, theme)
        if (isValidated) {
            console.log({editData: input})
            setInput(user.userData)
            editUser(input, navigation)
        }
    }

    return (
        <AppSafeAreaView>
            <Container>
                <ScrollView>
                    <ProfileHeader>
                        <AppText fontSize="22" fontWeight="bold">Edit Profile</AppText>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Ionicons name="checkmark" size={25} color={theme.TEXT_COLOR} />
                        </TouchableOpacity>
                    </ProfileHeader>
                    <ProfileDPContainer>
                        <ProfileDP source={{uri: input.profilePicture}}/>
                        <CameraWrapper onPress={handleImageSelection}>
                            <Ionicons name="camera-outline" size={18} color="#FFFFFF" />
                        </CameraWrapper>
                    </ProfileDPContainer>
                    <Card cardTopMargin="35" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.NAME} />
                            <DesignedTextInput 
                                placeholder="First Name"
                                value={input.firstName}
                                onChangeText={(data) => handleInput(data, 'firstName')}
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="35" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.NAME} />
                            <DesignedTextInput 
                                placeholder="Last Name"
                                value={input.lastName}
                                onChangeText={(data) => handleInput(data, 'lastName')}
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.CALL} />
                            <DesignedTextInput 
                                placeholder="Phone Number"
                                value={input.phoneNumber}
                                keyboardType="phone-pad"
                                onChangeText={(data) => handleInput(data, 'phoneNumber')}
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.MAIL} />
                            <DesignedTextInput 
                                placeholder="Email"
                                value={input.email}
                                keyboardType="email-address"
                                onChangeText={(data) => handleInput(data, 'email')}
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="0">
                        <DesignedInputContainer>
                            <DesignedInputIcon source={icons.MAIL} />
                            <DesignedTextInput 
                                placeholder="Address"
                                value={input.address}
                                onChangeText={(data) => handleInput(data, 'address')}
                            />
                        </DesignedInputContainer>
                    </Card>
                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.NAME} />
                            <DesignedTextInput 
                                placeholder="Add Child"
                                value={extraInput.children}
                                onChangeText={(data) => handleExtraInput(data, 'children')}
                            />
                            <AddButtonWrapper activeOpacity={0.8} onPress={() => handleAddData('children')}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        {
                            React.Children.toArray(input.children!.map((child: any) => {
                                childIndex++
                                return (
                                    <Text_IconWrapper>
                                        <AppText fontSize="15">{child.name}</AppText>
                                        <RemoveButton onPress={() => handleRemoveData('children', childIndex)}>
                                            <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                                        </RemoveButton>
                                    </Text_IconWrapper>
                                )
                            }))
                        }
                    </Card>

                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EDUCATION} />
                            <DesignedTextInput 
                                placeholder="Add Education"
                                value={extraInput.education}
                                onChangeText={(data) => handleExtraInput(data, 'education')}
                            />
                            <AddButtonWrapper activeOpacity={0.8} onPress={() => handleAddData('education')}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        {
                            React.Children.toArray(input.education!.map((item: any) => {
                                educationIndex++
                                return (
                                    <Text_IconWrapper>
                                        <AppText fontSize="14">{helpers.textToDisplay(`${item}`, 40)}</AppText>
                                        <RemoveButton onPress={() => handleRemoveData('education', educationIndex)}>
                                            <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                                        </RemoveButton>
                                    </Text_IconWrapper>
                                )
                            }))
                        }
                    </Card>

                    <Card cardTopMargin="15" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EXPERIENCE} />
                            <DesignedTextInput 
                                placeholder="Add Work Experience"
                                value={extraInput.workExperience}
                                onChangeText={(data) => handleExtraInput(data, 'workExperience')}
                            />
                            <AddButtonWrapper activeOpacity={0.8} onPress={() => handleAddData('workExperience')}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        {
                            React.Children.toArray(input.workExperience!.map((item: any) => {
                                workExperienceIndex++
                                return (
                                    <Text_IconWrapper>
                                        <AppText fontSize="14">{helpers.textToDisplay(`${item}`, 40)}</AppText>
                                        <RemoveButton onPress={() => handleRemoveData('workExperience', workExperienceIndex)}>
                                            <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                                        </RemoveButton>
                                    </Text_IconWrapper>
                                )
                            }))
                        }
                    </Card>

                    <Card cardTopMargin="15" cardBottomMargin="10" cardPadding="5">
                        <DesignedInputContainer borderColor={theme.FOCUS_THEME_COLOR} flexBottomMargin="15">
                            <DesignedInputIcon source={icons.EDUCATION} />
                            <DesignedTextInput 
                                placeholder="Add Interest"
                                value={extraInput.interest}
                                onChangeText={(data) => handleExtraInput(data, 'interest')}
                            />
                            <AddButtonWrapper activeOpacity={0.8} onPress={() => handleAddData('interest')}>
                                <AntDesign name="pluscircle" size={22} color={theme.FOCUS_THEME_COLOR}/>
                            </AddButtonWrapper>
                        </DesignedInputContainer>
                        {
                            React.Children.toArray(input.interest!.map((item: any) => {
                                interestIndex++
                                return (
                                    <Text_IconWrapper>
                                        <AppText fontSize="14">{helpers.textToDisplay(`${item}`, 40)}</AppText>
                                        <RemoveButton onPress={() => handleRemoveData('interest', interestIndex)}>
                                            <Ionicons name="remove-circle" size={17} color={theme.FOCUS_THEME_COLOR} />
                                        </RemoveButton>
                                    </Text_IconWrapper>
                                )
                            }))
                        }
                    </Card>
                    <Button text="Save" btnWidth="50" btnBottomMargin="15" onPress={handleSubmit} />
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}