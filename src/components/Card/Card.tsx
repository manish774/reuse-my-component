// src/components/Card/Card.tsx
import React from 'react';
import './Card.css';

export interface CardProps {
  title?: string;
  footer?: React.ReactNode;
  padding?: string | number;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  footer,
  padding = '16px',
  children,
  className = '',
}) => (
  <div className={`card ${className}`} style={{ padding }}>
    {title && <div className="card__title">{title}</div>}
    <div className="card__body">{children}</div>
    {footer && <div className="card__footer">{footer}</div>}
  </div>
);
