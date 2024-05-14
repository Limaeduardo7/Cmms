module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Caminho para todos os arquivos dentro da pasta pages
    './components/**/*.{js,ts,jsx,tsx}', // Caminho para todos os arquivos dentro da pasta components
    // Inclua outras pastas onde você usa classes do Tailwind, se necessário
  ],
  darkMode: 'class',  // Alternar entre 'media' (prefere color-scheme) e 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
}
