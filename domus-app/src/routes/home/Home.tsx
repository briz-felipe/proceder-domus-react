import { useEffect, useState } from "react";

import  ProcederLogo from '../../components/base/ProcederLogo';
import { useNavigate } from "react-router-dom";
import { verify } from "../../api/auth";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    {
      title: "Menu",
      icon: "bi-list",
      subItems: [
        { title: "Perfil", icon: "bi-person", action: () => navigate("/perfil") },
        { title: "Sair", icon: "bi-box-arrow-right", action: () => { /* logout logic */ } }
      ]
    },
    {
      title: "Carro",
      icon: "bi-car-front",
      subItems: [
        { title: "Cadastrar", icon: "bi-plus-circle", action: () => navigate("/carros/cadastrar") },
        { title: "Multas", icon: "bi-exclamation-triangle", action: () => navigate("/carros/multas") },
        { title: "Gastos", icon: "bi-cash-stack", action: () => navigate("/carros/gastos") }
      ]
    },
    {
      title: "Imóveis",
      icon: "bi-house",
      subItems: [
        { title: "Cadastrar", icon: "bi-plus-circle", action: () => navigate("/imoveis/cadastrar") },
        { title: "Documentos", icon: "bi-file-earmark-text", action: () => navigate("/imoveis/documentos") },
        { title: "Gastos", icon: "bi-cash-stack", action: () => navigate("/imoveis/gastos") }
      ]
    },
    {
      title: "Financeiro",
      icon: "bi-wallet2",
      subItems: [
        { title: "Entrada", icon: "bi-arrow-down-circle", action: () => navigate("/financeiro/entrada") },
        { title: "Saída", icon: "bi-arrow-up-circle", action: () => navigate("/financeiro/saida") }
      ]
    }
  ];

  return (
    <div className="d-flex">
      {/* Botão de menu para mobile */}
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="btn btn-primary position-fixed"
          style={{
            zIndex: 1050,
            top: "10px",
            left: "10px",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <i className={`bi ${isMenuCollapsed ? 'bi-list' : 'bi-x'}`}></i>
        </button>
      )}

      {/* Sidebar/Navbar */}
      <div 
        className={`bg-dark text-white ${isMobile ? 'position-fixed' : 'position-sticky'} 
          ${isMobile && isMenuCollapsed ? 'd-none' : 'd-block'}`}
        style={{
          width: isMenuCollapsed ? "80px" : "280px",
          height: "100vh",
          zIndex: 1040,
          transition: "all 0.3s ease",
          overflowY: "auto"
        }}
      >
        <div className="p-3">
          <div className="text-center mb-4 mt-3">
            <ProcederLogo />
            {!isMenuCollapsed && <h4>DOMUS</h4>}
            {!isMenuCollapsed && <hr className="my-2" />}
            {isMenuCollapsed && (
              <button 
                onClick={toggleMenu}
                className="btn btn-link text-white"
                title="Expandir menu"
              >
                <i className="bi bi-list"></i>
              </button>
            )}
          </div>

          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className={`btn btn-dark w-100 text-start d-flex align-items-center ${isMenuCollapsed ? 'justify-content-center' : ''}`}
                onClick={() => {
                  if (item.subItems) {
                    toggleDropdown(index);
                  } else {
                    item.action && item.action();
                    if (isMobile) setIsMenuCollapsed(true);
                  }
                }}
                title={isMenuCollapsed ? item.title : ''}
              >
                <i className={`bi ${item.icon} ${isMenuCollapsed ? '' : 'me-2'}`}></i>
                {!isMenuCollapsed && item.title}
                {!isMenuCollapsed && item.subItems && (
                  <i className={`bi bi-chevron-${activeDropdown === index ? 'up' : 'down'} ms-auto`}></i>
                )}
              </button>

              {!isMenuCollapsed && item.subItems && activeDropdown === index && (
                <div className="ps-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="btn btn-link text-white w-100 text-start d-flex align-items-center"
                      onClick={() => {
                        subItem.action();
                        if (isMobile) setIsMenuCollapsed(true);
                      }}
                    >
                      <i className={`bi ${subItem.icon} me-2`}></i>
                      {subItem.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Botão para recolher/expandir o menu (somente desktop) */}
          {!isMobile && (
            <button 
              onClick={toggleMenu}
              className="btn btn-link text-white w-100 text-start d-flex align-items-center mt-3"
            >
              <i className={`bi ${isMenuCollapsed ? 'bi-arrow-right' : 'bi-arrow-left'} ${isMenuCollapsed ? '' : 'me-2'}`}></i>
              {!isMenuCollapsed && "Recolher menu"}
            </button>
          )}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div 
        className="flex-grow-1 p-3"
        style={{
          marginLeft: isMobile ? "0" : (isMenuCollapsed ? "80px" : "280px"),
          transition: "margin 0.3s ease"
        }}
      >
        <div className="container mt-5">
          <h2>Home</h2>
          <p>Conteúdo principal da sua aplicação aqui.</p>
        </div>
      </div>
    </div>
  );
}