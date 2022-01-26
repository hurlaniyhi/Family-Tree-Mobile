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
    CommentContentContainer,
    EnterCommentWrapper,
    CommentInputContainer,
    CommentInput,
    CommentButton,
    SendChatIcon,
    CommentContentWrapper,
    CommentViewWrapper,
    DataPictureWrapper,
    FamDataPicture,
    CommentTextWrapper
} from '@styles';
import VisibilityContext from '@src/provider/state-manager/visibilityProvider';
import { icons } from '@src/provider/config/constant'


export const AddComment: React.FC<any> = ({onPress}) => {
    const { toggledAddComment } = useContext(VisibilityContext)

    return (
        <CreatePostContainer>
            <PostPopUp>
                <PostTitleBar>
                    <PostCloseLine activeOpacity={0.8} onPress={() => toggledAddComment(false)} />
                    <FlexRowBetween>
                        <PostBackIcon onPress={() => toggledAddComment(false)} />
                        <AppText fontSize="20" fontWeight="bold">Comments</AppText>
                        <PostCheckIcon />
                    </FlexRowBetween>
                </PostTitleBar>
                <CommentContentContainer>
                    <CommentContentWrapper>
                        <ScrollView>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP3} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Ridwan Olaniyi</AppText>
                                    <AppText fontSize="14">I will like to come over tomorrow</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Akachukwu Ajulibe</AppText>
                                    <AppText fontSize="14">This is awesome... nice one. We will be going to field soon. Did you think you are fit for today's match?</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP2} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Diyaah Ridwan</AppText>
                                    <AppText fontSize="14">Oh Ok</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP4} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Firdaws Kolawole</AppText>
                                    <AppText fontSize="14">Lol...This guy is really funny</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP3} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Habeeb Olanrewaju</AppText>
                                    <AppText fontSize="14">Nice Post... i really like it</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                            <CommentViewWrapper>
                                <DataPictureWrapper customWidth="37" flexBottomMargin="0">
                                    <FamDataPicture customWidth="37" source={icons.DP} />
                                </DataPictureWrapper>
                                <CommentTextWrapper>
                                    <AppText fontWeight="bold">Imtiyaaz Ridwan</AppText>
                                    <AppText fontSize="14">Yeyy, this is actually cool.</AppText>
                                </CommentTextWrapper>
                            </CommentViewWrapper>
                        </ScrollView>
                    </CommentContentWrapper>

                    <EnterCommentWrapper>
                        <CommentInputContainer>
                            <CommentInput />
                        </CommentInputContainer>
                        <CommentButton activeOpacity={0.8}>
                            <SendChatIcon />
                        </CommentButton>
                    </EnterCommentWrapper>
                </CommentContentContainer>
            </PostPopUp>
        </CreatePostContainer>
    );
}