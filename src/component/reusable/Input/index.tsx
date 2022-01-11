import React, {useState} from 'react'
import { InputContainer, InputIcon, TextInput } from '@styles';

export const Input: React.FC<any> = React.memo(() => {
    const [focus, setFocus] = useState(false)
    function handleFocus(data: boolean) {
        setFocus(data)
    }
    return (
        <InputContainer isFocus={focus}>
            <InputIcon source={require("@icons/call-light.png")} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Phone number"
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
             />
        </InputContainer>
    );
})