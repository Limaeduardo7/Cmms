import React, { createContext, useContext, useState, useEffect } from 'react';

// Criar um Contexto de Tema
const ThemeContext = createContext();

// Componente Provider que gerencia o estado do tema
export const ThemeProvider = ({ children }) => {
  // Estado para controlar o tema
  const [theme, setTheme] = useState('light');

  // Função para alternar entre temas claro e escuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme); // Salvar no localStorage para persistência
      document.documentElement.className = newTheme; // Aplicar classe no elemento root
    }
  };

  // Efeito para inicializar o tema com base no armazenamento local
  useEffect(() => {
    const localTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.className = localTheme;
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o contexto de tema
export const useTheme = () => useContext(ThemeContext);