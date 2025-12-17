require('dotenv').config({ path: '.env.local' });

const sequelize = require('./config/database');

const express = require('express');
const { swaggerUi, specs } = require('./swagger');
const app = express();

const user = require('./models/User');
const Livre = require('./models/livre'); // ➕ Ajoute cette ligne

sequelize.sync({ alter: true })
  .then(() => console.log("✅ Base de données synchronisée"))
  .catch(err => console.error("❌ Erreur :", err));

const PORT = process.env.PORT || 4000;

// Routes
const authRoutes = require('./routes/auth');   // ➕ Ajoute cette ligne
const livreRoutes = require('./routes/livre'); // ➕ Ajoute cette ligne

app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
    res.json({ 
        message: "Bienvenue sur l'API de gestion de livres de Dark Romance 🖤📚",
        endpoints: {
            auth: {
                register: "POST /api/auth/register",
                login: "POST /api/auth/login"
            },
            livres: {
                getAll: "GET /api/livres",
                getOne: "GET /api/livres/:id",
                create: "POST /api/livres",
                update: "PUT /api/livres/:id",
                delete: "DELETE /api/livres/:id"
            }
        }
    });
});

// ➕ Ajoute ces deux lignes
app.use('/api/auth', authRoutes);
app.use('/api/livres', livreRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Serveur en Express en écoute sur http://localhost:${PORT}`);
});