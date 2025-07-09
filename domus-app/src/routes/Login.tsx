import { theme } from '../theme';
import { useState } from 'react';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha }); // Aqui você pode chamar a API
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ width: theme.spacing.xl, border: 'none', borderRadius: theme.radius.md }}>
        <div className="card-header bg-white border-0 pt-4">
          <h2 className="text-center" style={{ color: theme.colors.primary }}>Bem-vindo de volta</h2>
          <p className="text-center text-muted">Faça login para continuar</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" style={{ color: theme.colors.text }}>Email</label>
              <input 
                type="email" 
                className="form-control py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: theme.radius.sm, borderColor: theme.colors.border }}
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="form-label" style={{ color: theme.colors.text }}>Senha</label>
              <input 
                type="password" 
                className="form-control py-2"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{ borderRadius: theme.radius.sm, borderColor: theme.colors.border }}
                placeholder="••••••••"
              />
            </div>
            {/* Resto do formulário igual... */}
            <button 
              type="submit"
              className="btn w-100 py-2" 
              style={{ 
                backgroundColor: theme.colors.primary, 
                color: theme.colors.white, 
                borderRadius: theme.radius.sm,
                border: 'none',
                fontWeight: '600'
              }}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
