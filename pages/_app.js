// pages/_app.js
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider themeType="white">
      <CssBaseline />  
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default MyApp;
