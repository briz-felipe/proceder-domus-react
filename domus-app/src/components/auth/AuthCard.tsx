import { CSSProperties, ReactNode } from 'react';

import { theme } from '../../theme';

interface AuthCardProps {
  children: ReactNode;
  maxWidth?: CSSProperties['width'];
}

export default function AuthCard({ children, maxWidth = '30rem' }: AuthCardProps) {
  return (
    <div 
      className="card border-0 shadow-lg auth-card-hover"
      style={{
        width: '100%',
        maxWidth,
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.border,
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
