import '../styles/globals.css';
import { ThemeProvider } from '../client/contexts/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import '../i18n'; // Certifique-se de importar o i18n aqui

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
