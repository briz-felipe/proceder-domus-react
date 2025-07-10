import { ReactNode } from "react";
import logo from '../../assets/logo.svg';

interface ProcederLogoProps {
  width?: number | string;
  className?: string;
  shadowColor?: string;
  shadowSize?: number;
}

export default function ProcederLogo({
  width = 100,
  className = '',
  shadowColor = 'rgba(138, 43, 226, 0.5)',
  shadowSize = 10
}: ProcederLogoProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <img 
        src={logo} 
        alt="Logo da Proceder" 
        width={width}
        style={{ 
          filter: `drop-shadow(0 0 ${shadowSize}px ${shadowColor})` 
        }} 
      />
    </div>
  );
}