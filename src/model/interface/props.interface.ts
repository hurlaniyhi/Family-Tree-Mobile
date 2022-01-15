import { LightTheme} from '@src/provider/config/theme'
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export interface Theme {
    theme: typeof LightTheme,
    isFocus?: boolean,
    cardTopMargin?: string,
    cardBottomMargin?: string,
    fontWeight?: string,
    fontSize?: string,
    justify?: string,
    flexWidth?: string,
    themeColor?: string,
    textColor?: string;
    flexTopMargin?: string,
    flexBottomMargin?: string,
    textMargin?: string,
    flowCircleSize?: string,
    flowCircleColor?: string,
    isChecked?: boolean,
    selectedOption?: string;
    customWidth?: string
}

export interface TopLogoModel {
    img: ImageSourcePropType
}

export interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    text: string,
    btnTopMargin?: string,
    btnBottomMargin?: string
}

export interface CardProps {
    children: React.ReactNode,
    cardTopMargin?: string,
    cardBottomMargin?: string,
    cardPadding?: string
}

interface DropDownOption {
    title: string
}

export interface InputProps {
    placeHolder: string,
    icon: ImageSourcePropType
}

export interface SelectFieldProps extends InputProps {
    selectOptions: DropDownOption[],
    selectedText: string,
    handleSelectedData: ((event: string, name?: string) => void) | undefined
}

