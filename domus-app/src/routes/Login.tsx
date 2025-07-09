export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ width: '400px', border: 'none', borderRadius: '15px' }}>
        <div className="card-header bg-white border-0 pt-4">
          <h2 className="text-center" style={{ color: '#a528fe' }}>Bem-vindo de volta</h2>
          <p className="text-center text-muted">Faça login para continuar</p>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-4">
              <label className="form-label" style={{ color: '#6c757d' }}>Email</label>
              <input 
                type="email" 
                className="form-control py-2" 
                style={{ borderRadius: '8px', borderColor: '#e0e0e0' }}
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="form-label" style={{ color: '#6c757d' }}>Senha</label>
              <input 
                type="password" 
                className="form-control py-2" 
                style={{ borderRadius: '8px', borderColor: '#e0e0e0' }}
                placeholder="••••••••"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe" style={{ color: '#6c757d' }}>Lembrar-me</label>
              </div>
              <a href="#" style={{ color: '#a528fe', textDecoration: 'none' }}>Esqueceu a senha?</a>
            </div>
            <button 
              className="btn w-100 py-2" 
              style={{ 
                backgroundColor: '#a528fe', 
                color: 'white', 
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600'
              }}
            >
              Entrar
            </button>
            <div className="text-center mt-3">
              <p style={{ color: '#6c757d' }}>
                Não tem uma conta? <a href="#" style={{ color: '#a528fe', textDecoration: 'none' }}>Cadastre-se</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 