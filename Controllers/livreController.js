const livreService = require("../services/livres");

// Récupérer tous les livres
const getAll = async () => {
    try {
        return await livreService.getAll();
    } catch (error) {
        throw error;
    }
};

// Récupérer un livre par ID
const getOne = async (id) => {
    if (typeof id === 'undefined') {
        throw new Error("L'ID du livre est requis");
    }
    
    try {
        return await livreService.getOne(id);
    } catch (error) {
        throw error;
    }
};

// Créer un nouveau livre
const insertOne = async (titre, auteur, nombreSujets, resume, anneePublication, niveauDarkness) => {
    if (typeof titre === 'undefined' || typeof auteur === 'undefined' || typeof nombreSujets === 'undefined') {
        throw new Error("Vous devez renseigner au minimum le titre, l'auteur et le nombre de sujets");
    }
    
    try {
        const livreData = {
            titre,
            auteur,
            nombreSujets,
            resume,
            anneePublication,
            niveauDarkness: niveauDarkness || 'modéré'
        };
        
        return await livreService.insertOne(livreData);
    } catch (error) {
        throw error;
    }
};

// Mettre à jour un livre
const updateOne = async (id, livreData) => {
    if (typeof id === 'undefined') {
        throw new Error("L'ID du livre est requis");
    }
    
    try {
        return await livreService.updateOne(id, livreData);
    } catch (error) {
        throw error;
    }
};

// Supprimer un livre
const deleteOne = async (id) => {
    if (typeof id === 'undefined') {
        throw new Error("L'ID du livre est requis");
    }
    
    try {
        return await livreService.deleteOne(id);
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