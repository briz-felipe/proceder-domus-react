import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { verify } from "../../api/auth"; // ajuste esse caminho conforme o seu projeto

export default function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] =  useState<boolean | null>(null)
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const result = await verify(); // exemplo: verifica token no backend
      setIsAuthenticated(result);    // true ou false
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // enquanto verifica, pode exibir loading
    return <div>Verificando autenticação...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location, reason: "unauthorized" }} replace />;
  }

  return children;
}
