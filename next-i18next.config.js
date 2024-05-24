const HttpApi = require('i18next-http-backend');

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
  },
  backend: {
    loadPath: 'https://localhost:5001/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
  },
  ns: ['common', 'footer', 'second-page'],
  use: [HttpApi],
};
