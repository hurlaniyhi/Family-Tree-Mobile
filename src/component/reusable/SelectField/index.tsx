import React, { useContext, useState } from 'react'
import { InputContainer, InputIcon, SelectFieldText, ArrowDownIcon, DummyInput } from '@styles';
import { SelectFieldProps } from '@model'
import { MaterialIcons } from '@expo/vector-icons'
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { BottomSheet, ListItem } from 'react-native-elements';


export const SelectField: React.FC<SelectFieldProps> = React.memo(({ placeHolder, icon, selectOptions, selectedText, handleSelectedData }) => {
    const { theme } = useContext(ThemeContext)
    const [focus, setFocus] = useState(false)
    const [showOptions, setShowOptions] = useState<boolean>(false)

    function passSelectedData(data: string){
        setShowOptions(false)
        handleSelectedData!(data)
    }

    return (
        <>
            <InputContainer isFocus={focus}>
                <InputIcon source={icon} />
                <SelectFieldText selectedOption={selectedText} onPress={()=> setShowOptions(true)}>
                    {placeHolder}
                </SelectFieldText>
                <ArrowDownIcon onPress={()=> setShowOptions(true)} activeOpacity={0.9} >
                    <MaterialIcons name="keyboard-arrow-down" size={25} color={theme.BORDER} />
                </ArrowDownIcon>
                <DummyInput caretHidden={true} showSoftInputOnFocus={false} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </InputContainer>

            <BottomSheet modalProps={{}} isVisible={showOptions}>
            {selectOptions!.map((l, i) => (
                <ListItem
                    key={i}
                    containerStyle={{backgroundColor: theme.BODY}}
                >
                    <ListItem.Content>
                       {l.title === 'Cancel' ? 
                       <ListItem.Title style={{color: theme.TEXT_COLOR}} onPress={() => setShowOptions(false)}>{l.title}</ListItem.Title> 
                       : <ListItem.Title style={{color: theme.TEXT_COLOR}} onPress = {() => passSelectedData(l.title)}>{l.title}</ListItem.Title> 
                       }
                    </ListItem.Content>
                </ListItem>
                ))}
            </BottomSheet>
        </>
    );
})