const express = require('express');
const AuditLog = require('./models/AuditLog');
const app = express();

app.use(express.json());

app.post('/logs', async (req, res) => {
    try {
        const novoLog = await AuditLog.create(req.body);
        res.status(201).json({
            message: "Log salvo no banco com sucesso!",
            id_pericia: novoLog.id // Retorna o ID do registro
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar log" });
    }
});
// Rota para Listar Logs (com opção de filtrar por usuário)
app.get('/logs', async (req, res) => {
    try {
        const { user } = req.query; // Pega o usuário da URL, ex: /logs?user=Camila
        
        let filtro = {};
        if (user) {
            filtro = { where: { usuario: user } };
        }

        const logs = await AuditLog.findAll({
            ...filtro,
            order: [['createdAt', 'DESC']] // Mais recentes primeiro
        });

        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar logs" });
    }
});
app.listen(3000, () => console.log("🔥 Servidor e Banco conectados!"));