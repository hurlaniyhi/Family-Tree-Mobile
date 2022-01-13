import React, { useContext, useState } from 'react'
import { InputContainer, InputIcon, SelectFieldText, ArrowDownIcon, DummyInput } from '@styles';
import { SelectFieldProps } from '@model'
import { MaterialIcons } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { BottomSheet, ListItem } from 'react-native-elements';
import {  widthPercentageToDP as wp } from 'react-native-responsive-screen'


export const SelectField: React.FC<SelectFieldProps> = React.memo(({ placeHolder, icon, selectOptions, selectedText, handleSelectedData }) => {
    const { theme } = useContext(ThemeContext)
    const [focus, setFocus] = useState<boolean>(false)
    const [showOptions, setShowOptions] = useState<boolean>(false)

    function passSelectedData(data: string){
        setShowOptions(false)
        handleSelectedData!(data)
    }

    return (
        <>
            <InputContainer isFocus={focus}>
                <InputIcon source={icon} />
                <SelectFieldText style={{zIndex: 10}} selectedOption={selectedText} onPress={()=> setShowOptions(true)}>
                    {placeHolder}
                </SelectFieldText>
                <ArrowDownIcon onPress={()=> setShowOptions(true)} activeOpacity={0.9} >
                    <MaterialIcons name="keyboard-arrow-down" size={25} color={theme.BORDER} />
                </ArrowDownIcon>
                <DummyInput caretHidden={true} showSoftInputOnFocus={false} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </InputContainer>

            <BottomSheet 
                modalProps={{ onRequestClose: () => { setShowOptions(false)}, animationType: 'slide', }} 
                isVisible={showOptions}>
                {selectOptions!.map((l, i) => (
                <ListItem
                    key={i}
                    containerStyle={{backgroundColor: theme.BODY}}
                >
                    <ListItem.Content>
                       {l.title === 'Cancel' ? 
                       <ListItem.Title style={{color: theme.TEXT_COLOR, width: wp('90%')}} onPress={() => setShowOptions(false)}>{l.title}</ListItem.Title> 
                       : <ListItem.Title style={{color: theme.TEXT_COLOR, width: wp('90%')}} onPress = {() => passSelectedData(l.title)}>{l.title}</ListItem.Title> 
                       }
                    </ListItem.Content>
                </ListItem>
                ))}
            </BottomSheet>
        </>
    );
})