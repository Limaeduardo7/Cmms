// server.ts

import app from '../app'; // Importa a configuração do Express

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
