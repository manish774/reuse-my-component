// src/components/Avatar/Avatar.tsx
import React from 'react';
import type { Size, AvatarColor } from '../../types';
import './Avatar.css';

export interface AvatarProps {
  name: string;
  src?: string;
  size?: Size;
  color?: AvatarColor;
  className?: string;
}

const SIZE_MAP: Record<Size, number> = { sm: 28, md: 36, lg: 44, xl: 56 };
const FONT_MAP: Record<Size, number> = { sm: 11, md: 13, lg: 14, xl: 17 };

const COLOR_CLASSES: Record<Exclude<AvatarColor, 'auto'>, string> = {
  info:    'avatar--info',
  success: 'avatar--success',
  warning: 'avatar--warning',
  danger:  'avatar--danger',
};

function getAutoColor(name: string): string {
  const colors = ['info', 'success', 'warning', 'danger'] as const;
  const index = name.charCodeAt(0) % colors.length;
  return COLOR_CLASSES[colors[index]];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size = 'md',
  color = 'auto',
  className = '',
}) => {
  const px = SIZE_MAP[size];
  const fs = FONT_MAP[size];
  const colorClass = color === 'auto' ? getAutoColor(name) : COLOR_CLASSES[color];

  return (
    <div
      className={`avatar ${colorClass} ${className}`}
      style={{ width: px, height: px, fontSize: fs }}
      title={name}
      aria-label={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="avatar__img"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};
