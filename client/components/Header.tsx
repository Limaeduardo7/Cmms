import React, { useState, useEffect, useRef } from 'react';
import { Menu, User, Bell, Sun, Moon, Trash2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../contexts/CurrencyContext';
import styles from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation('translation');
  const { currency, setCurrency } = useCurrency();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navbarEndRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
        userMenuRef.current && !userMenuRef.current.contains(event.target) &&
        notificationMenuRef.current && !notificationMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
        setIsNotificationMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false);
    setIsNotificationMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMobileMenuOpen(false);
    setIsNotificationMenuOpen(false);
  };

  const toggleNotificationMenu = () => {
    setIsNotificationMenuOpen(!isNotificationMenuOpen);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(!isSettingsModalOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  };

  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className={`navbar ${styles.navbar}`}>
      <div className="navbar-start">
        <button
          className={`btn btn-ghost btn-circle ${styles.menuButton}`}
          onClick={toggleMobileMenu}
        >
          <Menu className="h-5 w-5" />
        </button>
        <a className={`btn btn-ghost normal-case text-xl ${styles.desktopTitle}`}>{t('welcome')}</a>
      </div>
      <div className={`navbar-center ${styles.mobileTitle}`}>
        <a className="btn btn-ghost normal-case text-xl">{t('welcome')}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal p-0 ${styles.desktopNav}`}>
          <li><a href="/dashboard">{t('dashboard')}</a></li>
          <li><a href="/ativos">{t('assets')}</a></li>
          <li><a href="/ordens-servico">{t('work_orders')}</a></li>
          <li><a href="/planejamento">{t('planning')}</a></li>
          <li><a href="/categorias">{t('categories')}</a></li>
          <li><a href="/responsaveis">{t('responsibles')}</a></li>
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className={`dropdownMobileMenu ${styles.dropdownMobileMenu}`}>
          <ul>
            <li><a href="/dashboard">{t('dashboard')}</a></li>
            <li><a href="/ativos">{t('assets')}</a></li>
            <li><a href="/ordens-servico">{t('work_orders')}</a></li>
            <li><a href="/planejamento">{t('planning')}</a></li>
            <li><a href="/categorias">{t('categories')}</a></li>
            <li><a href="/responsaveis">{t('responsibles')}</a></li>
          </ul>
        </div>
      )}
      <div className="navbar-end" ref={navbarEndRef}>
        <button
          className={`btn btn-ghost btn-circle ${styles.iconSpacing}`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button
          className={`btn btn-ghost btn-circle ${styles.notificationIcon}`}
          onClick={toggleNotificationMenu}
        >
          <Bell className="h-5 w-5" />
        </button>
        {isNotificationMenuOpen && (
          <div ref={notificationMenuRef} className={`dropdownNotificationMenu ${styles.dropdownNotificationMenu}`}>
            <div className="notification-header">
              <button className="mark-all-read" onClick={markAllAsRead}>{t('mark_all_as_read')}</button>
            </div>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id} className={notification.read ? '' : 'notification-unread'}>
                  <div className="notification-content">
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.timestamp.toLocaleTimeString()}</span>
                    <button className="delete-notification" onClick={() => deleteNotification(notification.id)}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleUserMenu}
        >
          <User className="h-5 w-5" />
        </button>
        {isUserMenuOpen && (
          <div ref={userMenuRef} className={`dropdownUserMenu ${styles.dropdownUserMenu}`}>
            <ul>
              <li><a href="#" onClick={toggleProfileModal}>{t('profile')}</a></li> {/* Link para abrir o modal de perfil */}
              <li><a href="#" onClick={toggleSettingsModal}>{t('settings')}</a></li> {/* Link para abrir o modal de configurações */}
              <li><a href="/logout">{t('logout')}</a></li>
            </ul>
          </div>
        )}
      </div>
      {isProfileModalOpen && (
        <div
          id="profile-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('profile')}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleProfileModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">{t('close_modal')}</span>
                </button>
              </div>
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {/* Campos do formulário para perfil */}
                  <div className="col-span-2">
                    <label htmlFor="profileName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('name')}</label>
                    <input type="text" id="profileName" name="profileName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="profileEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('email')}</label>
                    <input type="email" id="profileEmail" name="profileEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="profilePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('password')}</label>
                    <input type="password" id="profilePassword" name="profilePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="profileImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('profile_image')}</label>
                    <input type="file" id="profileImage" name="profileImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                  </div>
                </div>
                <button
                  className={`block text-white ${theme === 'dark' ? 'bg-gray-900 hover:bg-black focus:ring-gray-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                  type="submit"
                >
                  {t('save')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {isSettingsModalOpen && (
        <div
          id="settings-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('settings')}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleSettingsModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">{t('close_modal')}</span>
                </button>
              </div>
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {/* Campos do formulário para configurações */}
                  <div className="col-span-2">
                    <label htmlFor="setting1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('language')}</label>
                    <select id="setting1" name="setting1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                      <option value="en">English</option>
                      <option value="pt">Português</option>
                      <option value="es">Espanhol</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="setting2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('timezone')}</label>
                    <select id="setting2" name="setting2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                      <option value="gmt-3">GMT-3</option>
                      <option value="gmt-2">GMT-2</option>
                      <option value="gmt-1">GMT-1</option>
                      <option value="gmt">GMT</option>
                      <option value="gmt+1">GMT+1</option>
                      <option value="gmt+2">GMT+2</option>
                      <option value="gmt+3">GMT+3</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('currency')}</label>
                    <select id="currency" name="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleCurrencyChange} defaultValue={currency}>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="BRL">BRL</option>
                      <option value="GBP">GBP</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                </div>
                <button
                  className={`block text-white ${theme === 'dark' ? 'bg-gray-900 hover:bg-black focus:ring-gray-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                  type="submit"
                >
                  {t('save')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
