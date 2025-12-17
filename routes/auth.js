const express = require('express');
const router = express.Router();

const userCtrl = require("../controllers/users");        
const authCtrl = require("../controllers/authController");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags:
 *       - Authentification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post('/register', async (req, res) => {
    const {email, password} = req.body;

    try {
        await userCtrl.insertOne(email, password);
        return res.status(200).send("User bien créé !");
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     tags:
 *       - Authentification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       500:
 *         description: Erreur serveur
 */
router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const jwt = await authCtrl.login(email, password);
        return res.status(200).json({ jwt });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

module.exports = router;