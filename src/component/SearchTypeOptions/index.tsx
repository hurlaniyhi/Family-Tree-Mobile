import React, { useContext } from 'react'
import { CreatePostContainer, OptionPopUp, ScrollView, OptionText  } from '@styles'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'


export const SearchTypeOptions: React.FC<{onPress: any}> = ({ onPress }) => {
    const { toggleSearchType } = useContext(VisibilityContext)

    function handleSelection (data: string) {
        onPress(data)
        toggleSearchType(false)
    }

    return (
        <CreatePostContainer>
            <OptionPopUp>
                <ScrollView>
                    <OptionText onPress={() => handleSelection("Family")}>Family</OptionText>
                    <OptionText onPress={() => handleSelection("Person")}>Person</OptionText>
                    <OptionText onPress={() => toggleSearchType(false)}>Cancel</OptionText>
                </ScrollView>
            </OptionPopUp >
        </CreatePostContainer>
    );
}