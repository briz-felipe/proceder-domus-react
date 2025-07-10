import { ReactNode, useEffect, useState } from "react";

type AlertVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

interface ModernAlertProps {
  variant?: AlertVariant;
  dismissible?: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  showIcon?: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export default function ModernAlert({
  variant = 'primary',
  dismissible = true,
  children,
  onClose,
  className = '',
  showIcon = true,
  autoClose = false,
  autoCloseDelay = 5000
}: ModernAlertProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay]);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  if (!show) return null;

  const iconMap: Record<AlertVariant, ReactNode> = {
    primary: <i className="bi bi-info-circle-fill me-2"></i>,
    secondary: <i className="bi bi-dash-circle-fill me-2"></i>,
    success: <i className="bi bi-check-circle-fill me-2"></i>,
    danger: <i className="bi bi-exclamation-triangle-fill me-2"></i>,
    warning: <i className="bi bi-exclamation-circle-fill me-2"></i>,
    info: <i className="bi bi-info-circle-fill me-2"></i>,
    light: <i className="bi bi-circle-fill me-2"></i>,
    dark: <i className="bi bi-circle-fill me-2"></i>
  };

  const alertClasses = `alert alert-${variant} ${dismissible ? 'alert-dismissible' : ''} ${className}`;

  return (
    <div className={alertClasses} role="alert">
      {showIcon && iconMap[variant]}
      {children}
      {dismissible && (
        <button 
          type="button" 
          className="btn-close" 
          onClick={handleClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
}