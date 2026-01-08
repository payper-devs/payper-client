import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle } from "react-native";
import { ButtonProps } from "./types";
import { getButtonStyles, styles } from "./styles";

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "solid",
    color = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    disabled = false,
    style,
    ...rest
}) => {
    const isDisabled = disabled || isLoading;
    const buttonStyles = getButtonStyles(variant, color, size, isDisabled);

    const containerStyle: ViewStyle[] = [buttonStyles.container];
    if (fullWidth) containerStyle.push(styles.fullWidth);
    if (style) containerStyle.push(style);

    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={0.8}
            style={containerStyle}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator color={buttonStyles.text.color} size="small" />
            ) : (
                <Text style={buttonStyles.text}>{children}</Text>
            )}
        </TouchableOpacity>
    );
};
