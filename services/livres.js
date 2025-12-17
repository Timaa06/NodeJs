const Livre = require('../models/livre');

// Récupérer tous les livres
const getAll = async () => {
    try {
        return await Livre.findAll();
    } catch (error) {
        throw new Error("Erreur lors de la récupération des livres: " + error.message);
    }
};

// Récupérer un livre par son ID
const getOne = async (id) => {
    try {
        const livre = await Livre.findByPk(id);
        if (!livre) throw new Error("Livre non trouvé");
        return livre;
    } catch (error) {
        throw error;
    }
};

// Créer un nouveau livre
const insertOne = async (livreData) => {
    try {
        if (!livreData.titre || !livreData.auteur) {
            throw new Error("Le titre et l'auteur sont obligatoires");
        }

        if (typeof livreData.nombreSujets === 'undefined') {
            throw new Error("Le nombre de sujets est obligatoire");
        }

        return await Livre.create(livreData);
    } catch (error) {
        throw error;
    }
};

// Mettre à jour un livre
const updateOne = async (id, livreData) => {
    try {
        const livre = await Livre.findByPk(id);
        if (!livre) throw new Error("Livre non trouvé");

        await livre.update(livreData);
        return livre;
    } catch (error) {
        throw error;
    }
};

// Supprimer un livre
const deleteOne = async (id) => {
    try {
        const livre = await Livre.findByPk(id);
        if (!livre) throw new Error("Livre non trouvé");

        await livre.destroy();
        return { message: "Livre supprimé avec succès" };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    getOne,
    insertOne,
    updateOne,
    deleteOne
};