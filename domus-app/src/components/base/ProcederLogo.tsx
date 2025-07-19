import React, { useState } from "react";

import logoG from '../../assets/logo-g.svg';
import logoS from '../../assets/logo-s.svg';

interface ProcederLogoProps {
  width?: number | string;
  className?: string;
  shadowColor?: string;
  shadowSize?: number;
}

export default function ProcederLogo({
  width = 90,
  className = '',
  shadowColor = 'rgba(138, 43, 226, 0.5)',
  shadowSize = 8
}: ProcederLogoProps) {
  const [logoS, setLogoS] = useState(false);

  return (
    <div className={`d-flex justify-content-center ${className}`}>
      <img 
        src={logoG} 
        alt="Logo da Proceder" 
        width={width}
        style={{ 
          filter: `drop-shadow(0 0 ${shadowSize}px ${shadowColor})` 
        }} 
      />
    </div>
  );
}