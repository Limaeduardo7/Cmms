// pages/_app.js
import '../styles/globals.css';
import { ThemeProvider } from '../client/contexts/ThemeContext'; // Certifique-se de que o caminho está correto


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;