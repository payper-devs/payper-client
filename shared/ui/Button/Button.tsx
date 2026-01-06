import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    fullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    onPress?: () => void;
}

export const Button = ({

} : ButtonProps) => {

}