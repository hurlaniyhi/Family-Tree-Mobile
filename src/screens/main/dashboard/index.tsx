import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, BackHandler } from 'react-native'
import { 
    UserIntroWrapper, 
    ProfilePicsWrapper, 
    ScrollView ,
    Picture,
    ParentChildContainer,
    SubContainer,
    DataProfileWrapper,
    DataProfileChild,
    DataPictureWrapper,
    AppText,
    StatusCircle,
    StatusCircleSm,
    FamDataPicture,
    ChatListWrapper,
    ChatMemberTextWrapper,
    SearchContainer,
    SearchText,
    PostContainer,
    PostImage,
    FlexRowBetween,
    MemberListText,
    AddPostButton,
    LikeCommentWrapper,
    TransparentThumbUpIcon,
    TransparentCommentIcon,
    CommentIconWrapper,
    AppSafeAreaView
} from '@styles'
import { Container, Card, CreatePost, AddComment } from '@component'
import { icons } from '@src/provider/config/constant'
import helpers from '@src/utility/helper'
import { Feather, Entypo, AntDesign } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider';


export  const Dashboard: React.FC<any> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext)
    const { visibility, toggleCreatePost, toggleAddComment } = useContext(VisibilityContext)

    useEffect(()=> {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
        }
    }, [visibility])

    function handleBackPress(): any{
        if(visibility.isCreatePost || visibility.isAddComment) {
            toggleCreatePost(false)
            toggleAddComment(false)
            return true
        }
    }
    
    return (
        <AppSafeAreaView>
            <AddPostButton onPress= {() => toggleCreatePost(true)}>
                <AntDesign name="pluscircle" size={42} color={theme.FOCUS_THEME_COLOR}/>
            </AddPostButton>

            { visibility.isCreatePost ? <CreatePost onPress={() => toggleCreatePost(false)}></CreatePost> : null}
            { visibility.isAddComment ? <AddComment onPress={() => toggleAddComment(false)}></AddComment> : null}

            <ScrollView>
                <Container>
                    <UserIntroWrapper>
                        <AppText fontSize="18">
                            Hi 
                            <AppText fontSize="18" fontWeight="bold"> Ridwan </AppText>
                        </AppText>
                        <ProfilePicsWrapper activeOpacity={1} onPress = {() => navigation.navigate("Others", {screen: 'Profile'})}>
                            <Picture source={icons.DP3} />
                        </ProfilePicsWrapper>
                    </UserIntroWrapper>

                    <Card cardPadding="0">
                        <SearchContainer onPress={() => navigation.navigate('Others', { screen: 'SearchPage'})}>
                            <Feather name="search" size={20} color="#CFCECC" />
                            <SearchText>Search</SearchText>
                        </SearchContainer>
                    </Card>

                    <Card>
                        <ParentChildContainer onPress={() => navigation.navigate("Family Profile")}>
                            <SubContainer>
                                <AppText fontWeight="bold" fontSize="14" justify="center">
                                    Parent
                                </AppText>
                                <DataProfileWrapper>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP3} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="12">
                                            {helpers.textToDisplay("Ridwan", 14)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="10" textColor="#A6A6A6">Father</AppText>
                                    </DataProfileChild>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP4} />
                                            <StatusCircle flowCircleColor="#C4C4C4"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="12">
                                            {helpers.textToDisplay("Haleemah", 12)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="10" textColor="#A6A6A6">Mother</AppText>
                                    </DataProfileChild>
                                </DataProfileWrapper>
                            </SubContainer>
                            <SubContainer>
                                <AppText fontWeight="bold" fontSize="14">
                                    Children
                                </AppText>
                                <DataProfileWrapper>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="12">
                                            {helpers.textToDisplay("Roshan", 12)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="10" textColor="#A6A6A6">Son</AppText>
                                    </DataProfileChild>
                                    <DataProfileChild>
                                        <DataPictureWrapper>
                                            <FamDataPicture source={icons.DP2} />
                                            <StatusCircle flowCircleColor="#00BF4D"/>
                                        </DataPictureWrapper>
                                        <AppText fontWeight="600" fontSize="12">
                                            {helpers.textToDisplay("Diyah", 12)}
                                        </AppText>
                                        <AppText fontWeight="600" fontSize="10" textColor="#A6A6A6">Daughter</AppText>
                                    </DataProfileChild>
                                </DataProfileWrapper>
                            </SubContainer>
                        </ParentChildContainer>
                    </Card>

                    <Card>
                        <TouchableOpacity activeOpacity={0.8} onPress = {() => navigation.navigate("Messages")}>
                            <AppText fontSize="14" fontWeight="bold">Messages</AppText>
                            <ChatListWrapper activeOpacity={1} >
                                <DataPictureWrapper customWidth="32" flexBottomMargin="0">
                                    <FamDataPicture customWidth="32" source={icons.DP3} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="12" fontWeight="600">Habeeb Olanrewaju</AppText>
                                    <MemberListText fontSize="10" textColor="#A6A6A6" fontWeight="500">
                                        {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 66)}
                                    </MemberListText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <ChatListWrapper activeOpacity={1} >
                                <DataPictureWrapper customWidth="32" flexBottomMargin="0">
                                    <FamDataPicture customWidth="32" source={icons.DP} />
                                    <StatusCircleSm  flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="12" fontWeight="600">Imtiyaaz Ridwan</AppText>
                                    <MemberListText fontSize="10" textColor="#A6A6A6" fontWeight="500">
                                        {helpers.textToDisplay("Let us start developing the mobile app using React-native. We will use styled-components for CSS.", 65)}
                                    </MemberListText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <ChatListWrapper activeOpacity={1} >
                                <DataPictureWrapper customWidth="32" flexBottomMargin="0">
                                    <FamDataPicture customWidth="32" source={icons.DP2} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="12" fontWeight="600">Diyah Ridwan</AppText>
                                    <MemberListText fontSize="10" textColor="#A6A6A6" fontWeight="500">
                                        {helpers.textToDisplay("Weldone Newton, we will start the design soon.", 65)}
                                    </MemberListText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                        </TouchableOpacity>
                    </Card>
    
                    <Card cardPadding="0">
                        <PostContainer>
                            <ChatListWrapper activeOpacity={1} flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="34" flexBottomMargin="0">
                                    <FamDataPicture customWidth="34" source={icons.DP} />
                                    <StatusCircleSm flowCircleColor="#FF007C"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="14" fontWeight="bold">Akachukwu Ajulibe</AppText>
                                    <AppText fontSize="10" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper>
                            <AppText fontWeight="600" fontSize="13">Y'all should checkout this sick wallpaper</AppText>
                            <PostImage source={icons.POST_IMAGE} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={17} color={theme.FOCUS_THEME_COLOR} /> 9
                                </AppText>
                                <AppText fontWeight="600" fontSize="11">5 Comments</AppText>
                            </FlexRowBetween>
                            <LikeCommentWrapper>
                                <CommentIconWrapper>
                                    <TransparentThumbUpIcon />
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Like</AppText>
                                </CommentIconWrapper>
                                <CommentIconWrapper onPress={() => toggleAddComment(true)}>
                                    <TransparentCommentIcon /> 
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Comment</AppText>
                                </CommentIconWrapper>
                            </LikeCommentWrapper>
                        </PostContainer>
                    </Card>
                    <Card cardPadding="0">
                        <PostContainer>
                            <ChatListWrapper activeOpacity={1} flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="34" flexBottomMargin="0">
                                    <FamDataPicture customWidth="34" source={icons.DP3} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="14" fontWeight="bold">Roshan Ridwan</AppText>
                                    <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <AppText fontWeight="600" fontSize="13">Omoh the 'i' don suffer my guy gan...lol</AppText>
                            <PostImage source={icons.POST_IMAGE3} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={17} color={theme.FOCUS_THEME_COLOR} /> 40
                                </AppText>
                                <AppText fontWeight="600" fontSize="11">25 Comments</AppText>
                            </FlexRowBetween>
                            <LikeCommentWrapper>
                                <CommentIconWrapper>
                                    <TransparentThumbUpIcon />
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Like</AppText>
                                </CommentIconWrapper>
                                <CommentIconWrapper onPress={() => toggleAddComment(true)}>
                                    <TransparentCommentIcon /> 
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Comment</AppText>
                                </CommentIconWrapper>
                            </LikeCommentWrapper>
                        </PostContainer>
                    </Card>
                    <Card cardBottomMargin="10">
                        <PostContainer>
                            <ChatListWrapper activeOpacity={1} flexTopMargin="0" flexBottomMargin="12" >
                                <DataPictureWrapper customWidth="34" flexBottomMargin="0">
                                    <FamDataPicture customWidth="34" source={icons.DP3} />
                                    <StatusCircleSm flowCircleColor="#00BF4D"/>
                                </DataPictureWrapper>
                                <ChatMemberTextWrapper>
                                    <AppText fontSize="14" fontWeight="bold">Habeeb Olanrewaju</AppText>
                                    <AppText fontSize="12" textColor="#A6A6A6" fontWeight="500">
                                        Sat - 27 Nov 2021
                                    </AppText>
                                </ChatMemberTextWrapper>
                            </ChatListWrapper >
                            <AppText fontWeight="600" fontSize="13">CSS na your mate ni...una never see anything</AppText>
                            <PostImage source={icons.POST_IMAGE1} />
                            <FlexRowBetween>
                                <AppText fontWeight="600" fontSize="10">
                                    <Entypo name="thumbs-up" size={17} color={theme.FOCUS_THEME_COLOR} /> 28
                                </AppText>
                                <AppText fontWeight="600" fontSize="11">10 Comments</AppText>
                            </FlexRowBetween>
                            <LikeCommentWrapper>
                                <CommentIconWrapper>
                                    <TransparentThumbUpIcon />
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Like</AppText>
                                </CommentIconWrapper>
                                <CommentIconWrapper onPress={() => toggleAddComment(true)}>
                                    <TransparentCommentIcon /> 
                                    <AppText fontSize="12" fontWeight="bold" textColor="#A6A6A6">Comment</AppText>
                                </CommentIconWrapper>
                            </LikeCommentWrapper>
                        </PostContainer>
                    </Card>
                </Container>
            </ScrollView>
        </AppSafeAreaView>
    );
}