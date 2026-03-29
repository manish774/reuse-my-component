// src/components/Toggle/Toggle.tsx
import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
}) => (
  <label className={`toggle ${disabled ? 'toggle--disabled' : ''} ${className}`}>
    <span
      className={`toggle__track ${checked ? 'toggle__track--on' : ''}`}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={(e) => {
        if ((e.key === ' ' || e.key === 'Enter') && !disabled) onChange(!checked);
      }}
    >
      <span className="toggle__knob" />
    </span>
    {label && <span className="toggle__label">{label}</span>}
  </label>
);
