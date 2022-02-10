import React, {useState} from 'react'
import { InputContainer, InputIcon, TextInput } from '@styles';
import { InputProps } from '@model'


export const Input: React.FC<InputProps> = React.memo(({ placeHolder, icon, handleInputData, secureTextEntry, keyboardType, value }) => {
    const [focus, setFocus] = useState(false)
    const [input, setInput] = useState("")

    function handleFocus(data: boolean) {
        setFocus(data)
    }

    function handleInput (value: string) {
        setInput(value)
        handleInputData!(value)
    }

    return (
        <InputContainer isFocus={focus}>
            <InputIcon source={icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeHolder}
                value={value}
                keyboardType={keyboardType || "default"}
                secureTextEntry={secureTextEntry || false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                onChangeText={handleInput}
             />
        </InputContainer>
    );
})