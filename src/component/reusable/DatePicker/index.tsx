import React, { useState } from 'react'
import { DatePickerContainer, InputIcon, SelectedDate } from '@styles';
import { icons } from '@src/provider/config/constant'
import DateTimePicker from '@react-native-community/datetimepicker';


export  const DateInput: React.FC<any> = ({onChange}) => {
    const [date, setDate] = useState<Date>(new Date(1598051730000))
    const [selectedDate, setSelectedDate] = useState<string>("")
    const [show, setShow] = useState(false)

    function handleDate(event: any, chosenDate: Date|any){
        setShow(false)
        const currentDate = chosenDate || date
        let dateToString: string = ''

        if(chosenDate){
            chosenDate = new Date(chosenDate.toISOString().substring(0, 10))
            chosenDate.setDate(chosenDate.getDate() + 1)
            dateToString = chosenDate.toISOString().substring(0, 10)
        }
       
        setSelectedDate(dateToString) 
        setDate(currentDate)
        onChange(dateToString)
    }

    return (
        <DatePickerContainer onPress={() => setShow(true)}>
            <InputIcon source={icons.DATE} />
            <SelectedDate selectedOption={selectedDate}>{selectedDate || 'Date of Birth'}</SelectedDate>
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