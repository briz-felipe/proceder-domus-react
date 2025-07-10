// 🔗 Base URL apenas usada para login (sem proxy)
const URL = "http://localhost:8000";

// 🔐 Função de login
export async function login(username, password) {
  const response = await fetch(`${URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });

  if (!response.ok) {
    console.error(response.json())
  }

  const data = await response.json();
  window.location.href = "/home"; // redirecionamento pós-login
}


export async function verify() {
  try {
    const response = await fetch(`${URL}/admin/verify`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 403) {
        console.warn("🔒 Token expirado");
      } else {
        console.error("🔴 Erro na verificação do token:", response.status);
      }
      return false;
    }

    return true;
  } catch (err) {
    console.error("🚨 Erro de conexão na verificação do token:", err);
    return false;
  }
}
