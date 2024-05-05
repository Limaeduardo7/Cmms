import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Ajuste o caminho conforme a localização do seu contexto
import Sidebar from './Header';

const Layout = ({ children, pageTitle }) => {
  const { theme } = useTheme(); // Utilize o estado de tema do contexto

  return (
    <div className={`flex h-screen ${theme}`}>  // Adiciona a classe de tema ao elemento raiz
      <Sidebar />
      <div className="flex-1">
      <header className={`w-full bg-white shadow ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
  <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
  </div>
</header>
<main className="w-full">{children}</main>

      </div>
    </div>
  );
};

export default Layout;