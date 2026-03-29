// src/components/Alert/Alert.tsx
import React from 'react';
import type { Variant } from '../../types';
import './Alert.css';

const ICONS: Record<Variant, string> = {
  default: 'ℹ',
  info:    'ℹ',
  success: '✓',
  warning: '⚠',
  danger:  '✕',
};

export interface AlertProps {
  variant?: Variant;
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  onClose,
  children,
  className = '',
}) => (
  <div className={`alert alert--${variant} ${className}`} role="alert">
    <span className="alert__icon" aria-hidden="true">{ICONS[variant]}</span>
    <div className="alert__body">
      {title && <strong className="alert__title">{title}</strong>}
      <span className="alert__message">{children}</span>
    </div>
    {onClose && (
      <button className="alert__close" onClick={onClose} aria-label="Close">✕</button>
    )}
  </div>
);
