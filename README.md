# 🔍 API de Auditoria e Logs Forenses

Esta é uma API desenvolvida em **Node.js** e **PostgreSQL** focada na rastreabilidade e integridade de ações dentro de um sistema corporativo. O projeto simula um ambiente de auditoria onde cada ação crítica é registrada para fins de conformidade e perícia digital.

## 🛠️ Tecnologias Utilizadas
- **Node.js** com Express
- **PostgreSQL** (Banco de dados relacional)
- **Sequelize** (ORM para persistência de dados)
- **Dotenv** (Segurança de credenciais)

## ⚖️ Contexto Pericial
Em investigações de crimes digitais ou fraudes corporativas, a trilha de auditoria (Audit Trail) é a peça fundamental para o princípio do não-repúdio. Esta API garante:
1. **Identificação:** Quem executou a ação.
2. **Temporalidade:** Registro preciso de quando ocorreu (createdAt).
3. **Objeto:** Qual recurso foi afetado.
4. **Detalhamento:** Armazenamento em JSON para preservar o estado do dado no momento da ação.

## 🚀 Como testar
1. Clone o repositório.
2. Configure seu `.env` com as credenciais do Postgres.
3. Instale as dependências: `npm install`.
4. Rode o servidor: `node src/server.js`.

| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :---: |
| **POST** | `/logs` | Registra um novo evento de auditoria | 🔐 Privado |
| **GET** | `/logs` | Lista logs com filtros (data, usuário, tipo) | 🔐 Privado |
| **GET** | `/logs/:id` | Detalhes técnicos de um registro específico | 🔐 Privado |
