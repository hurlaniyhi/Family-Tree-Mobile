import React, {useState} from 'react'
import { InputContainer, InputIcon, TextInput } from '@styles';
import { InputProps } from '@model'


export const Input: React.FC<InputProps> = React.memo(({ placeHolder, icon }) => {
    const [focus, setFocus] = useState(false)
    function handleFocus(data: boolean) {
        setFocus(data)
    }
    return (
        <InputContainer isFocus={focus}>
            <InputIcon source={icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeHolder}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
             />
        </InputContainer>
    );
})