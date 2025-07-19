// 🔗 Base URL apenas usada para login (sem proxy)
const URL = "http://localhost:8000";

// 🔐 Autenticação usando variáveis de ambiente
export async function authenticate() {
  try {
    console.log("🟡 Iniciando autenticação...");

    const username = import.meta.env.VITE_ADMIN_USERNAME;
    const password = import.meta.env.VITE_ADMIN_PASSWORD;


    console.log("🧩 Credenciais:", { username, password });

    const data = await login(username, password, false);
    console.log("🟢 Autenticação bem-sucedida:", data);
    return data;

  } catch (error) {
    console.error("❌ Erro ao autenticar:", error);
    throw error;
  }
}

// 🔐 Função de login
export async function login(username, password, redirect = "/home") {
  try {
    console.log("🟡 Fazendo login com:", username);

    const response = await fetch(`${URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🔴 Erro no login:", response.status, errorData);
      throw new Error("Falha no login");
    }

    const data = await response.json();
    console.log("🟢 Login bem-sucedido:", data);

    if (redirect) {
      console.log(`➡️ Redirecionando para ${redirect}`);
      window.location.href = redirect;
    }
    return data;
  } catch (error) {
    console.error("❌ Erro durante login:", error);
    throw error;
  }
}

// ✅ Verificação do token
export async function verify() {
  try {
    console.log("🔍 Verificando token...");

    const response = await fetch(`${URL}/admin/verify`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      alert = response.status == 403 ? "🔒 Token expirado (403)" : "🔴 Erro na verificação do token:"
      console.log(alert)
      return false;
    }

    console.log("🟢 Token válido.");
    return true;

  } catch (err) {
    console.error("🚨 Erro de conexão na verificação do token:", err);
    return false;
  }
}

// 👤 Criação de novo usuário
export async function createUser(userData) {
  try {
    console.log("🟡 Criando novo usuário:", userData);
    if(! await verify()){
      const auth = await authenticate();
    }

    const response = await fetch(`${URL}/admin/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🔴 Erro ao criar usuário:", response.status, errorData);
      throw new Error("Erro ao criar usuário");
    }

    const data = await response.json();
    console.log("🟢 Usuário criado com sucesso:", data);

    console.log("🔁 Redirecionando para '/'");
    window.location.href = `/?first_name=${data.first_name}`;
    
  } catch (error) {+
    console.error("❌ Erro ao criar usuário:", error);
    throw error;
  }
}
