import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    ns: ['common'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
