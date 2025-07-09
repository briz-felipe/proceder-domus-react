// components/auth/AuthInput.tsx
import { forwardRef } from 'react';
import { theme } from '../../theme';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ icon, error, className = '', ...props }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        {props.label && (
          <label 
            htmlFor={props.id} 
            className="form-label mb-2 d-block"
            style={{ color: theme.colors.text }}
          >
            {props.label}
          </label>
        )}
        
        <div className="input-group">
          {icon && (
            <span 
              className="input-group-text bg-dark border-end-0"
              style={{ 
                borderColor: theme.colors.border,
                color: theme.colors.textMuted
              }}
            >
              {icon}
            </span>
          )}
          
          <input
            ref={ref}
            className={`form-control ${icon ? 'border-start-0 ps-2' : ''}`}
            style={{
              backgroundColor: theme.colors.secondaryLight,
              borderColor: theme.colors.border,
              color: theme.colors.white
            }}
            {...props}
          />
        </div>
        
        {error && (
          <div className="mt-1 text-danger" style={{ fontSize: '0.8rem' }}>
            {error}
          </div>
        )}
      </div>
    );
  }
);