import React, { useCallback, useMemo, useRef} from 'react'
import { CreatePostContainer, PostPopUp, AppText, ScrollView } from '@styles';


export const CreatePost: React.FC<any> = ({onPress}) => {
    return (
        <CreatePostContainer>
            <PostPopUp>
                <ScrollView>
                <AppText onPress={onPress}>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                <AppText>Ridwan Olaniyi</AppText>
                </ScrollView>
            </PostPopUp>
        </CreatePostContainer>
    );
}