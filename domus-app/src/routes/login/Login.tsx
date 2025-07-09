import 'bootstrap-icons/font/bootstrap-icons.css';

import AuthCard from '../../components/auth/AuthCard'; // <-- novo import
import logo from '../../assets/logo.svg';
import { theme } from '../../theme';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log({ email, senha });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: theme.colors.secondaryDark,
        padding: theme.spacing.lg
      }}
    >
      <AuthCard> {/* <-- aqui usamos o novo componente */}
        <div 
          className="card-header border-bottom-0 text-center pt-4 pb-3"
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="mb-4">
            <img 
              src={logo} 
              alt="Logo" 
              width="100" 
              style={{ filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.5))' }} 
            />
          </div>
          <h2 
            className="mb-2 fw-bold"
            style={{ color: theme.colors.white }}
          >
            DOMUS
          </h2>
          <p style={{ color: theme.colors.textMuted }}>
            Bem-vindo, pode entrar.
          </p>
        </div>
        
        <div className="card-body px-4 pt-0 pb-2">
          <form onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="mb-4">
              <label 
                htmlFor="email"
                className="form-label mb-2"
                style={{ color: theme.colors.text }}
              >
                Email
              </label>
              <div className="input-group">
                <span 
                  className="input-group-text border-end-0"
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: theme.colors.border,
                    color: theme.colors.textMuted
                  }}
                >
                  <i className="bi bi-envelope"></i>
                </span>
                <input 
                  type="email" 
                  id="email"
                  className="form-control border-start-0 ps-2"
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: theme.colors.border,
                    color: theme.colors.white,
                    borderRadius: `0 ${theme.radius.sm} ${theme.radius.sm} 0`
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            
            {/* SENHA */}
            <div className="mb-4">
              <label 
                htmlFor="senha"
                className="form-label mb-2"
                style={{ color: theme.colors.text }}
              >
                Senha
              </label>
              <div className="input-group position-relative">
                <span 
                  className="input-group-text border-end-0"
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: theme.colors.border,
                    color: theme.colors.textMuted
                  }}
                >
                  <i className="bi bi-lock"></i>
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="senha"
                  className="form-control border-start-0 ps-2 pe-5"
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: theme.colors.border,
                    color: theme.colors.white,
                    borderRadius: `0 ${theme.radius.sm} ${theme.radius.sm} 0`
                  }}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button" 
                  className="btn btn-link position-absolute end-0 top-0 bottom-0 pe-3"
                  style={{ color: theme.colors.textMuted }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                </button>
              </div>
            </div>
            
            <div className="d-flex justify-content-end mb-4">
              <a 
                href="#!" 
                className="text-decoration-none"
                style={{ color: theme.colors.primaryLight }}
              >
                Esqueceu a senha?
              </a>
            </div>
            
            <button 
              type="submit"
              className="btn w-100 py-2 fw-semibold border-0 mb-3"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
                borderRadius: theme.radius.sm,
                transition: theme.transitions.default,
                boxShadow: theme.shadows.button
              }}
              disabled={isLoading}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primaryDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
            >
              {isLoading ? (
                <>
                  <span 
                    className="spinner-border spinner-border-sm me-2" 
                    aria-hidden="true"
                  ></span>
                  Carregando...
                </>
              ) : 'Entrar'}
            </button>
          </form>
        </div>
        
        <div 
          className="card-footer border-top-0 text-center py-3"
          style={{ backgroundColor: 'transparent' }}
        >
          <p style={{ color: theme.colors.textMuted, marginBottom: 0 }}>
            Não tem uma conta?{' '}
            <a 
              href="#!" 
              className="text-decoration-none"
              style={{ color: theme.colors.primaryLight }}
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </AuthCard>
    </div>
  );
}
