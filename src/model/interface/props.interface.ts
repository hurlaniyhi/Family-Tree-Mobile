import { LightTheme} from '@src/provider/confg/theme'
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export interface Theme {
    theme: typeof LightTheme,
    isFocus?: boolean
}

export interface TopLogoModel {
    img: ImageSourcePropType
}

export interface ButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined
}