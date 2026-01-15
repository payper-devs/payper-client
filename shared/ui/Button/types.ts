import { TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";
import { ColorType } from "../../theme/colors";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<TouchableOpacityProps, "children" | "style"> {
    children: string;
    variant?: ButtonVariant;
    color?: ColorType;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
    style?: ViewStyle;
}

export interface ButtonStyles {
    container: ViewStyle;
    text: TextStyle;
}
