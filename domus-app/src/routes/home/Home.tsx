import React, { useState } from "react";

import ProcederLogo from "../../components/base/ProcederLogo";
import { i } from "framer-motion/client";

// Ícone de Menu (Hambúrguer)
const MenuIcon = () => (
  <i className="bi bi-three-dots-vertical"></i>
);

// Ícone de Fechar (X)
const CloseIcon = () => (
  <i className="bi bi-x-lg"></i>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    imoveis: false,
    veiculos: false,
    financeiro: false
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen({
      ...dropdownOpen,
      [menu]: !dropdownOpen[menu]
    });
  };

  const mainLinks = [
    { 
      label: "Menu", 
      icon: "bi-list",
      subItems: [
        { href: "#", label: "Perfil", icon: "bi-person" },
        { href: "#", label: "Sair", icon: "bi-box-arrow-right" }
      ]
    },
    { 
      label: "Imóveis", 
      icon: "bi-house-door",
      subItems: [
        { href: "#", label: "Cadastrar", icon: "bi-plus-circle" },
        { href: "#", label: "Documentos", icon: "bi-folder" },
        { href: "#", label: "Pagamentos", icon: "bi-credit-card" }
      ]
    },
    { 
      label: "Veículos", 
      icon: "bi-car-front-fill",
      subItems: [
        { href: "#", label: "Cadastrar", icon: "bi-plus-circle" },
        { href: "#", label: "Multas", icon: "bi-exclamation-triangle" },
        { href: "#", label: "Pagamentos", icon: "bi-credit-card" }
      ]
    },
    { 
      label: "Financeiro", 
      icon: "bi-cash-stack",
      subItems: [
        { href: "#", label: "Entrada", icon: "bi-arrow-down-circle" },
        { href: "#", label: "Saída", icon: "bi-arrow-up-circle" }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Marca */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-white text-2xl font-bold tracking-wider flex items-center">
                {/* <i className="bi bi-building text-purple-400 mr-2"></i> */}
                <ProcederLogo className="mr-2"/>
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Domus
                </span>
              </a>
            </div>

            {/* Links da Navegação para telas grandes (Desktop) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {mainLinks.map((item, index) => (
                  <div key={index} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.label.toLowerCase())}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300 group-hover:bg-purple-900 group-hover:bg-opacity-50"
                    >
                      <i className={`bi ${item.icon} mr-2 text-purple-400`}></i>
                      {item.label}
                      <i className={`bi bi-chevron-down ml-1 text-xs ${dropdownOpen[item.label.toLowerCase()] ? 'transform rotate-180' : ''}`}></i>
                    </button>
                    
                    <div 
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-purple-700 z-50 ${dropdownOpen[item.label.toLowerCase()] ? 'block' : 'hidden'} group-hover:block`}
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-purple-900 hover:text-white"
                          >
                            <i className={`bi ${subItem.icon} mr-2 text-purple-300`}></i>
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão do usuário e notificações (Desktop) */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <i className="bi bi-bell text-xl"></i>
              </button>
              <div className="relative">
                <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                  />
                </button>
              </div>
            </div> */}

            {/* Botão do Menu Mobile (Hamburguer) */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile (visível quando 'isOpen' é true) */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 bg-opacity-95 border-t border-purple-900">
          {mainLinks.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(item.label.toLowerCase())}
                className="w-full flex justify-between items-center text-gray-300 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                <div className="flex items-center">
                  <i className={`bi ${item.icon} mr-2 text-purple-400`}></i>
                  {item.label}
                </div>
                <i className={`bi bi-chevron-down text-xs ${dropdownOpen[item.label.toLowerCase()] ? 'transform rotate-180' : ''}`}></i>
              </button>
              
              <div className={`${dropdownOpen[item.label.toLowerCase()] ? 'block' : 'hidden'} pl-4`}>
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="flex items-center text-gray-400 hover:bg-purple-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-2"
                  >
                    <i className={`bi ${subItem.icon} mr-2 text-purple-300`}></i>
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
          {/* Perfil mobile */}
          {/* <div className="pt-4 pb-2 border-t border-purple-900">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Usuário</div>
                <div className="text-sm font-medium text-purple-300">admin@imobiliaria.com</div>
              </div>
              <button className="ml-auto p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <i className="bi bi-bell text-xl"></i>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}