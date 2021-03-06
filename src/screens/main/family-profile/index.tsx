import React, { useContext, useState} from 'react'
import { Container, Card, FamilyData, FamilyTree } from '@component'
import { 
    ProfileHeader, 
    AppText,
    ScrollView,
    ToggleFamilyDetails,
    TogglerIndicator,
    ToggleText,
    AppSafeAreaView
} from '@styles'


export  const FamilyDetails: React.FC<any> = ({ navigation }) => {
    const [isFamilyTree, setIsFamilyTree] = useState<boolean>(false)

    return (
        <AppSafeAreaView>
            <Container>
                <ScrollView>
                    <ProfileHeader>
                        <AppText fontSize="22" fontWeight="bold">Family Details</AppText>
                    </ProfileHeader>
                    <Card cardTopMargin="10" cardPadding="0" horizontalPadding ="0">
                        <TogglerIndicator toggleDisplay={isFamilyTree} />
                        <ToggleFamilyDetails>
                            <ToggleText onPress={() => setIsFamilyTree(false)}><AppText fontWeight="bold">Family Details</AppText></ToggleText>
                            <ToggleText onPress={() => setIsFamilyTree(true)}><AppText fontWeight="bold">Family Tree</AppText></ToggleText>
                        </ToggleFamilyDetails>
                    </Card>
                    { isFamilyTree  ?  
                        <FamilyTree /> : 
                        <FamilyData navigation={navigation} />
                    }
                </ScrollView>
            </Container>
        </AppSafeAreaView>
    );
}