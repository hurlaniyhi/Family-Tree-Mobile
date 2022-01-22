import React, {useContext} from 'react'
import { 
    CreatePostContainer, 
    PostPopUp, 
    AppText, 
    ScrollView,
    PostTitleBar,
    FlexRowBetween,
    PostBackIcon,
    PostCheckIcon,
    PostCloseLine,
    PostContentContainer,
    PostContentWrapper,
    ChooseImageWrapper,
    MediaIcon,
    ChatListWrapper,
    DataPictureWrapper,
    FamDataPicture,
    StatusCircleSm,
    ChatMemberTextWrapper,
    PostTextInput,
    PostImage
} from '@styles';
import VisibilityContext from '@src/provider/state-manager/visibilityProvider';
import { Button } from '@component'
import { icons } from '@src/provider/config/constant'


export const CreatePost: React.FC<any> = ({onPress}) => {
    const { visibility, toggledCreatePost } = useContext(VisibilityContext)

    return (
        <CreatePostContainer>
            <PostPopUp>
                <PostTitleBar>
                    <PostCloseLine activeOpacity={0.8} onPress={() => toggledCreatePost(false)} />
                    <FlexRowBetween>
                        <PostBackIcon onPress={() => toggledCreatePost(false)} />
                        <AppText fontSize="20" fontWeight="bold">Create Post</AppText>
                        <PostCheckIcon />
                    </FlexRowBetween>
                </PostTitleBar>
                <PostContentContainer>
                    <ChatListWrapper activeOpacity={1} >
                        <DataPictureWrapper customWidth="32" flexBottomMargin="0">
                            <FamDataPicture customWidth="32" source={icons.DP3} />
                            <StatusCircleSm flowCircleColor="#00BF4D"/>
                        </DataPictureWrapper>
                        <ChatMemberTextWrapper>
                            <AppText fontWeight="bold">Ridwan Olaniyi</AppText>
                        </ChatMemberTextWrapper>
                    </ChatListWrapper >
                    <PostContentWrapper>
                        <ScrollView>
                            <PostTextInput />
                            <PostImage elementHeight="150" source={icons.POST_IMAGE3} />
                        </ScrollView>
                    </PostContentWrapper>
                    <ChooseImageWrapper>
                        <MediaIcon />
                        <AppText fontSize="12" textColor="#A6A6A6">Add Photo</AppText>
                    </ChooseImageWrapper>
                    <Button text="Post" btnWidth="50" onPress={()=> console.log("Post")} />
                </PostContentContainer>
            </PostPopUp>
        </CreatePostContainer>
    );
}