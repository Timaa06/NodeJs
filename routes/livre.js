const express = require('express');
const router = express.Router();

const livreCtrl = require("../controllers/livreController");
const authMiddleware = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /livres:
 *   get:
 *     summary: Récupère tous les livres
 *     tags:
 *       - Livres
 *     responses:
 *       200:
 *         description: Liste des livres
 */
router.get('/', authMiddleware, async (req, res) => {
    try {
        const livres = await livreCtrl.getAll();
        return res.status(200).json(livres);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /livres/{id}:
 *   get:
 *     summary: Récupère un livre par ID
 *     tags:
 *       - Livres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails du livre
 *       404:
 *         description: Livre non trouvé
 */
router.get('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const livre = await livreCtrl.getOne(id);
        return res.status(200).json(livre);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
});

/**
 * @swagger
 * /livres:
 *   post:
 *     summary: Crée un nouveau livre
 *     tags:
 *       - Livres
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               auteur:
 *                 type: string
 *               nombreSujets:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livre créé
 */
router.post('/', authMiddleware, async (req, res) => {
    const { titre, auteur, nombreSujets, resume, anneePublication, niveauDarkness } = req.body;

    try {
        const livre = await livreCtrl.insertOne(
            titre, 
            auteur, 
            nombreSujets, 
            resume, 
            anneePublication, 
            niveauDarkness
        );
        return res.status(201).json({ 
            message: "Livre créé avec succès !",
            livre 
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /livres/{id}:
 *   put:
 *     summary: Modifie un livre
 *     tags:
 *       - Livres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Livre modifié
 */
router.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const livreData = req.body;

    try {
        const livre = await livreCtrl.updateOne(id, livreData);
        return res.status(200).json({ 
            message: "Livre mis à jour avec succès !",
            livre 
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /livres/{id}:
 *   delete:
 *     summary: Supprime un livre
 *     tags:
 *       - Livres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livre supprimé
 */
router.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const result = await livreCtrl.deleteOne(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;