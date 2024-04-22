// Header.tsx
import React, { useState } from 'react';
import { Menu, User, Bell, Sun, Moon } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [theme, setTheme] = useState('light'); // Estado inicial do tema
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Alternar entre temas claros e escuros
    document.documentElement.classList.toggle('dark'); // Adicionar ou remover a classe 'dark' no root do documento
  };

  return (
    <header className={`${styles.header} ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex items-center space-x-4">
        <button className={`${styles.menuButton} lg:hidden`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <span>Harbinger CMMS</span>
      </div>
      {isMobileMenuOpen && (
        <nav className={`flex flex-col lg:hidden ${styles.mobileNav}`}>
          <a href="/ativos">Ativos</a>
          <a href="/ordens-de-servico">Ordens de Serviço</a>
          <a href="/planejamento">Planejamento</a>
          <a href="/categorias">Categorias</a>
          <a href="/responsaveis">Responsáveis</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
      )}
      <nav className={`hidden lg:flex space-x-4 ${styles.desktopNav}`}>
        <a href="/ativos">Ativos</a>
        <a href="/ordens-de-servico">Ordens de Serviço</a>
        <a href="/planejamento">Planejamento</a>
        <a href="/categorias">Categorias</a>
        <a href="/responsaveis">Responsáveis</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
      <div className="flex items-center space-x-8">
        <button onClick={toggleTheme} className={styles.iconButton}>
          {theme === 'light' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        <div className={styles.dropdownContainer}>
          <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className={styles.iconButton}>
            <Bell className="h-6 w-6" />
          </button>
          {isNotificationsOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>Notification 1</div>
              <div className={styles.dropdownItem}>Notification 2</div>
              <div className={styles.dropdownItem}>View all notifications</div>
            </div>
          )}
        </div>
        <div className={styles.dropdownContainer}>
          <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className={styles.iconButton}>
            <User className="h-6 w-6" />
          </button>
          {isUserMenuOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>Profile</div>
              <div className={styles.dropdownItem}>Settings</div>
              <div className={styles.dropdownItem}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;