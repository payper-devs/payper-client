import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors } from "@/shared/theme/colors";
import {
    ButtonVariant,
    ButtonColor,
    ButtonSize,
    ButtonRadius,
} from "./button.types";

/* ---------- Variant ---------- */

export const getContainerStyle = (
    variant: ButtonVariant,
    color: ButtonColor
): ViewStyle => {
    switch (variant) {
        case "outline":
            return {
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: colors[color],
            };
        case "ghost":
            return {
                backgroundColor: "transparent",
            };
        default:
            return {
                backgroundColor: colors[color],
            };
    }
};

export const getTextStyle = (
    variant: ButtonVariant,
    color: ButtonColor
): TextStyle => {
    if (variant === "default") {
        return { color: "#fff" };
    }
    return { color: colors[color] };
};

/* ---------- Size ---------- */

export const sizeStyles = StyleSheet.create<Record<ButtonSize, ViewStyle>>({
    sm: { paddingVertical: 6, paddingHorizontal: 12 },
    md: { paddingVertical: 10, paddingHorizontal: 16 },
    lg: { paddingVertical: 14, paddingHorizontal: 20 },
    icon: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});

/* ---------- Radius ---------- */

export const radiusStyles = StyleSheet.create<
    Record<ButtonRadius, ViewStyle>
>({
    none: { borderRadius: 0 },
    sm: { borderRadius: 4 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 12 },
    full: { borderRadius: 999 },
});

/* ---------- Common ---------- */

export const commonStyles = StyleSheet.create({
    base: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.85,
    },
    disabled: {
        opacity: 0.5,
    },
    fullWidth: {
        alignSelf: "stretch",
    },
    text: {
        fontWeight: "600",
    },
    textDisabled: {
        color: "#aaa",
    },
});
