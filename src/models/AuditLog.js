const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);

const AuditLog = sequelize.define('AuditLog', {
    usuario: { type: DataTypes.STRING, allowNull: false },
    acao: { type: DataTypes.STRING, allowNull: false },
    recurso: { type: DataTypes.STRING, allowNull: false },
    detalhes: { type: DataTypes.JSONB } // JSONB é excelente para perícia
});

// Sincroniza com o banco (cria a tabela se não existir)
sequelize.sync();

module.exports = AuditLog;