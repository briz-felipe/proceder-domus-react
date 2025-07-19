import { useEffect, useState } from 'react';

import AuthCard from '../../components/auth/AuthCard';
import ModernAlert from '../../components/base/ModernAlert';
import ProcederLogo from '../../components/base/ProcederLogo';
import { createUser } from '../../api/auth';
import { theme } from '../../theme';

export default function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Validação da senha
  useEffect(() => {
    if (senha) {
      setPasswordErrors({
        length: senha.length >= 8,
        uppercase: /[A-Z]/.test(senha),
        number: /[0-9]/.test(senha),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(senha)
      });
    } else {
      setPasswordErrors({
        length: false,
        uppercase: false,
        number: false,
        specialChar: false
      });
    }
  }, [senha]);

  // Validação se as senhas coincidem
  useEffect(() => {
    if (confirmSenha && senha !== confirmSenha) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [senha, confirmSenha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Verificar se todas as regras de senha foram atendidas
    const isPasswordValid = Object.values(passwordErrors).every(Boolean);
    
    if (!isPasswordValid) {
      setError("A senha não atende a todos os requisitos de segurança.");
      setIsLoading(false);
      return;
    }

    if (!passwordsMatch) {
      setError("As senhas não coincidem.");
      setIsLoading(false);
      return;
    }

    try {
      // Simule o cadastro
      await createUser(
        { first_name:firstName, last_name:lastName, email, username, password:senha }
      )
      // await register({ firstName, lastName, email, username, senha });
    } catch (err) {
      setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: theme.colors.secondaryDark,
        padding: theme.spacing.lg
      }}
    >
      <AuthCard>
        <div 
          className="card-header border-bottom-0 text-center pt-4 pb-3"
          style={{ backgroundColor: 'transparent' }}
        >
          <ProcederLogo />
          <h2 
            className="mb-2 fw-bold"
            style={{ color: theme.colors.white }}
          >
            Criar conta
          </h2>
          <p style={{ color: theme.colors.textMuted }}>
            Preencha os dados abaixo para se cadastrar.
          </p>
        </div>

        {error && (
          <div className='p-4 pt-0'>
            <ModernAlert variant="danger" dismissible>
              {error}
            </ModernAlert>
          </div>
        )}

        <div className="card-body px-4 pt-0 pb-2">
          <form onSubmit={handleSubmit}>
            {/* FIRST NAME */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Nome
              </label>
              <input 
                type="text" 
                className="form-control"
                style={{
                  backgroundColor: theme.colors.secondaryLight,
                  borderColor: theme.colors.border,
                  color: theme.colors.white
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* LAST NAME */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Sobrenome
              </label>
              <input 
                type="text" 
                className="form-control"
                style={{
                  backgroundColor: theme.colors.secondaryLight,
                  borderColor: theme.colors.border,
                  color: theme.colors.white
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Email
              </label>
              <input 
                type="email" 
                className="form-control"
                style={{
                  backgroundColor: theme.colors.secondaryLight,
                  borderColor: theme.colors.border,
                  color: theme.colors.white
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* USERNAME */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Username
              </label>
              <input 
                type="text" 
                className="form-control"
                style={{
                  backgroundColor: theme.colors.secondaryLight,
                  borderColor: theme.colors.border,
                  color: theme.colors.white
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* SENHA */}
            <div className="mb-3">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Senha
              </label>
              <div className="input-group position-relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control pe-5"
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: theme.colors.border,
                    color: theme.colors.white
                  }}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onFocus={() => setShowPasswordRules(true)}
                  onBlur={() => setShowPasswordRules(false)}
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
              
              {/* Card de regras de senha */}
              {showPasswordRules && (
                <div 
                  className="mt-2 p-3 rounded"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.text
                  }}
                >
                  <p className="mb-2 fw-semibold">Sua senha deve conter:</p>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-1">
                      <i 
                        className={`bi ${passwordErrors.length ? 'bi-check-circle-fill text-success' : 'bi-dash-circle'} me-2`}
                      ></i>
                      <span style={{ color: passwordErrors.length ? theme.colors.success : theme.colors.text }}>
                        Pelo menos 8 caracteres
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-1">
                      <i 
                        className={`bi ${passwordErrors.uppercase ? 'bi-check-circle-fill text-success' : 'bi-dash-circle'} me-2`}
                      ></i>
                      <span style={{ color: passwordErrors.uppercase ? theme.colors.success : theme.colors.text }}>
                        Pelo menos 1 letra maiúscula
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-1">
                      <i 
                        className={`bi ${passwordErrors.number ? 'bi-check-circle-fill text-success' : 'bi-dash-circle'} me-2`}
                      ></i>
                      <span style={{ color: passwordErrors.number ? theme.colors.success : theme.colors.text }}>
                        Pelo menos 1 número
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i 
                        className={`bi ${passwordErrors.specialChar ? 'bi-check-circle-fill text-success' : 'bi-dash-circle'} me-2`}
                      ></i>
                      <span style={{ color: passwordErrors.specialChar ? theme.colors.success : theme.colors.text }}>
                        Pelo menos 1 caractere especial (!@#$%^&* etc.)
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* CONFIRMAR SENHA */}
            <div className="mb-4">
              <label className="form-label mb-2" style={{ color: theme.colors.text }}>
                Confirmar Senha
              </label>
              <div className="input-group position-relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className={`form-control pe-5 ${!passwordsMatch && confirmSenha ? 'is-invalid' : ''}`}
                  style={{
                    backgroundColor: theme.colors.secondaryLight,
                    borderColor: !passwordsMatch && confirmSenha ? theme.colors.error : theme.colors.border,
                    color: theme.colors.white
                  }}
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
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
              {!passwordsMatch && confirmSenha && (
                <div className="invalid-feedback d-block" style={{ color: theme.colors.error }}>
                  As senhas não coincidem.
                </div>
              )}
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
                  <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  Criando conta...
                </>
              ) : 'Cadastrar'}
            </button>
          </form>
        </div>

        <div 
          className="card-footer border-top-0 text-center py-3"
          style={{ backgroundColor: 'transparent' }}
        >
          <p style={{ color: theme.colors.textMuted, marginBottom: 0 }}>
            Já tem uma conta?{' '}
            <a 
              href="/" 
              className="text-decoration-none"
              style={{ color: theme.colors.primaryLight }}
            >
              Entrar
            </a>
          </p>
        </div>
      </AuthCard>
    </div>
  );
}