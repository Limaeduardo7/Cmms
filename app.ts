import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';

function App() {
    return (
        <ThemeProvider>
            <Layout pageTitle="Home Page">
                {/* conteúdo */}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
