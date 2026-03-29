import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'default' | 'info' | 'success' | 'warning' | 'danger';
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type AvatarColor = 'auto' | 'info' | 'success' | 'warning' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: Size;
    loading?: boolean;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
}
declare const Input: React.FC<InputProps>;

interface BadgeProps {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
}
declare const Badge: React.FC<BadgeProps>;

interface AlertProps {
    variant?: Variant;
    title?: string;
    onClose?: () => void;
    children: React.ReactNode;
    className?: string;
}
declare const Alert: React.FC<AlertProps>;

interface CardProps {
    title?: string;
    footer?: React.ReactNode;
    padding?: string | number;
    children: React.ReactNode;
    className?: string;
}
declare const Card: React.FC<CardProps>;

interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}
declare const Toggle: React.FC<ToggleProps>;

interface AvatarProps {
    name: string;
    src?: string;
    size?: Size;
    color?: AvatarColor;
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;

export { Alert, type AlertProps, Avatar, type AvatarColor, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, type ButtonVariant, Card, type CardProps, Input, type InputProps, type Size, Toggle, type ToggleProps, type Variant };
