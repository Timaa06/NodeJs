const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livre = sequelize.define('Livre', {
    titre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    auteur: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    nombreSujets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    resume: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    anneePublication: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1800,
            max: new Date().getFullYear() + 1
        }
    },
    niveauDarkness: {
        type: DataTypes.ENUM('léger', 'modéré', 'intense', 'extrême'),
        allowNull: false,
        defaultValue: 'modéré'
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'livres',
    timestamps: true
});

module.exports = Livre;