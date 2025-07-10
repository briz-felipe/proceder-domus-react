import { useEffect, useState } from "react";

import { verify } from "../../api/auth";

export default function Home() {
  const [active, setActive] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const isActive = await verify();
      console.log(`${isActive} verify!`);
      setActive(isActive);
    };

    checkAuth();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Home</h2>
      {active === null && <p>Verificando...</p>}
      {active === true && <p>Você está logado.</p>}
      {active === false && <p>Você não está logado.</p>}
    </div>
  );
}
