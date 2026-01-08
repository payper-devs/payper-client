import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { colors } from "@/shared/theme/colors";

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonColor = keyof typeof colors;
export type ButtonSize = "sm" | "md" | "lg" | "icon";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    radius?: ButtonRadius;
    isLoading?: boolean;
    isDisabled?: boolean;
    fullWidth?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
}