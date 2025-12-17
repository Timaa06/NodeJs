const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Contrainte d'unicité sur l'email
        validate: {
            isEmail: true  // Validation du format email
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100]  // Longueur minimale de 6 caractères
        }
    },
}, {
    tableName: 'users',  // Nom explicite de la table
    timestamps: true  // Ajoute createdAt et updatedAt automatiquement
});

module.exports = User;