import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors, ColorType } from "../../theme/colors";
import { ButtonVariant, ButtonSize, ButtonStyles } from "./types";

const SIZE = {
    sm: { height: 36, px: 16, py: 8, radius: 6, fontSize: 14, lineHeight: 20 },
    md: { height: 44, px: 24, py: 12, radius: 8, fontSize: 16, lineHeight: 22 },
    lg: { height: 52, px: 32, py: 16, radius: 10, fontSize: 18, lineHeight: 24 },
} as const;

const getVariantStyle = (variant: ButtonVariant, baseColor: string): ViewStyle => {
    switch (variant) {
        case "solid":
            return { backgroundColor: baseColor };
        case "outline":
            return { backgroundColor: "transparent", borderWidth: 1, borderColor: baseColor };
        case "ghost":
            return { backgroundColor: "transparent" };
    }
};

export const getButtonStyles = (
    variant: ButtonVariant,
    color: ColorType,
    size: ButtonSize,
    disabled: boolean
): ButtonStyles => {
    const baseColor = colors[color];
    const sizeConfig = SIZE[size];

    const container: ViewStyle = {
        minHeight: sizeConfig.height,
        paddingVertical: sizeConfig.py,
        paddingHorizontal: sizeConfig.px,
        borderRadius: sizeConfig.radius,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        opacity: disabled ? 0.5 : 1,
        ...getVariantStyle(variant, baseColor),
    };

    const text: TextStyle = {
        fontSize: sizeConfig.fontSize,
        lineHeight: sizeConfig.lineHeight,
        fontWeight: "600",
        color: variant === "solid" ? "#FFFFFF" : baseColor,
    };

    return { container, text };
};

export const styles = StyleSheet.create({
    fullWidth: {
        width: "100%",
    },
    pressed: {
        opacity: 0.8,
    },
});
