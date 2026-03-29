// src/components/Badge/Badge.tsx
import React from 'react';
import type { Variant } from '../../types';
import './Badge.css';

export interface BadgeProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => (
  <span className={`badge badge--${variant} ${className}`}>
    {children}
  </span>
);
