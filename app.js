// Carregando módulos
    const express = require('express');
    const produtoRota = require('../routes/produto_rotas')
    const app = express();
    const PORTA = 3000;



app.use(express.json());
app.use('/produtos', produtoRota);


app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso...")
})