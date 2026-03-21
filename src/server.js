const express = require('express');
const app = express();
app.use(express.json());

// Exemplo de rota de log
app.post('/logs', async (req, res) => {
    const { usuario, acao, recurso, detalhes } = req.body;
    // Aqui entraria a lógica de salvar no banco
    console.log(`Log registrado: ${usuario} fez ${acao} em ${recurso}`);
    res.status(201).send({ message: "Log salvo com sucesso!" });
});

app.listen(3000, () => console.log("API Rodando na porta 3000"));