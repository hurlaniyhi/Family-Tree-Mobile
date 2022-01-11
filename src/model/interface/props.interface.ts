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
}

export interface TopLogoModel {
    img: ImageSourcePropType
}

export interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export interface CardProps {
    children: React.ReactNode,
    cardTopMargin?: string,
    cardBottomMargin?: string
}