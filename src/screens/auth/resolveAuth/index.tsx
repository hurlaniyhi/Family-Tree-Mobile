import React, { useContext, useLayoutEffect } from 'react'
import { View } from 'react-native'
import UserContext from '@src/provider/state-manager/userDataProvider'


export const ResolveAuth: React.FC<any> = ({ navigation }) => {
    const { user, getStoredData } = useContext(UserContext)

    useLayoutEffect(()=> {
        getStoredData(navigation)
    }, [])

    return (
        <>
            { !user.token &&  <View></View> }
        </>
    );
}