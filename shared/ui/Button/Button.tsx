import React from "react";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "./button.types";
import {
    commonStyles,
    sizeStyles,
    radiusStyles,
    getContainerStyle,
    getTextStyle,
} from "./button.styles";

export const Button = ({
                           children,
                           variant = "default",
                           color = "default",
                           size = "md",
                           radius = "md",
                           isLoading = false,
                           isDisabled = false,
                           fullWidth = false,
                           onPress,
                           style,
                       }: ButtonProps) => {
    const disabled = isDisabled || isLoading;

    return (
        <Pressable
            disabled={disabled}
            onPress={onPress}
            style={({ pressed }) => [
                commonStyles.base,
                sizeStyles[size],
                radiusStyles[radius],
                getContainerStyle(variant, color),
                fullWidth && commonStyles.fullWidth,
                disabled && commonStyles.disabled,
                pressed && !disabled && commonStyles.pressed,
                style,
            ]}
        >
            <Text
                style={[
                    commonStyles.text,
                    getTextStyle(variant, color),
                    disabled && commonStyles.textDisabled,
                ]}
            >
                {children}
            </Text>
        </Pressable>
    );
};