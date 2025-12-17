const userService = require('../services/users');

// Récupérer tous les utilisateurs
const getAll = async () => {
    try {
        return await userService.getAll();
    } catch (error) {
        throw error;
    }
};

// Créer un nouvel utilisateur
const insertOne = async (email, password) => {
    if (typeof email === 'undefined' || typeof password === 'undefined') {
        throw new Error("Vous devez renseigner l'email et le mot de passe");
    }
    
    try {
        const userData = {
            email,
            password
        };
        
        return await userService.insertOne(userData);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    insertOne
};