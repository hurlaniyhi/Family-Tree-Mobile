import React, { useState } from 'react'
import { DatePickerContainer, InputIcon, SelectedDate } from '@styles';
import { icons } from '@src/provider/config/constant'
import DateTimePicker from '@react-native-community/datetimepicker';


export  const DateInput: React.FC<any> = () => {
    const [date, setDate] = useState<Date>(new Date(1598051730000))
    const [selectedDate, setSelectedDate] = useState<any>("")
    const [show, setShow] = useState(false)

    function handleDate(event: any, selectedDate: Date|any){
        const currentDate = selectedDate || date
        setSelectedDate(selectedDate || '') 
        setDate(currentDate)
        setShow(false)
    }

    return (
        <DatePickerContainer onPress={() => setShow(true)}>
            <InputIcon source={icons.DATE} />
            <SelectedDate selectedOption={selectedDate}>{selectedDate.toString() || 'Date of Birth'}</SelectedDate>
            {show ? 
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDate}
                    textColor="green"
                /> : null
            }
        </DatePickerContainer>
    );
}