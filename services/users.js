const User = require('../models/User');
const bcrypt = require('bcrypt');

// Récupérer tous les utilisateurs
const getAll = async () => {
    return await User.findAll();
};

// Créer un nouvel utilisateur
const insertOne = async (user) => {
    // Vérifier la longueur du mot de passe
    if (user.password.length < 6) {
        throw new Error("Mot de passe trop court !");
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Créer l'utilisateur
    return await User.create({
        email: user.email,
        password: hashedPassword
    });
};

module.exports = {
    getAll,
    insertOne
};