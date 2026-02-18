# 📚 API Livres de Dark Romance

API REST développée avec Node.js, Express, Sequelize et MySQL pour gérer une collection de livres de dark romance avec authentification JWT.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-red)

## 🎯 Fonctionnalités

- ✅ **Authentification JWT** (Register / Login)
- ✅ **CRUD complet** des livres
- ✅ **Sécurisation** des routes avec middleware JWT
- ✅ **Base de données MySQL** avec Sequelize ORM
- ✅ **Documentation Swagger** interactive
- ✅ **Hashage des mots de passe** avec bcrypt
- ✅ **Validation des données** avec Sequelize validators

---

## 🚀 Technologies utilisées

| Technologie | Description |
|------------|-------------|
| **Node.js** | Environnement d'exécution JavaScript |
| **Express.js** | Framework web minimaliste |
| **Sequelize** | ORM pour MySQL |
| **MySQL** | Système de gestion de base de données |
| **JWT** | Authentification sécurisée |
| **bcrypt** | Hashage des mots de passe |
| **Swagger** | Documentation API interactive |

---

## 📦 Installation

### Prérequis

- Node.js (v18+)
- MySQL (v8.0+)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone https://github.com/Timaa06/livres-api.git
cd livres-api
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Créer la base de données MySQL**
```sql
CREATE DATABASE express;
```

4. **Configurer les variables d'environnement**

Créer un fichier `.env.local` à la racine :
```env
PORT=4000

DB_NAME=express
DB_USER=root
DB_PASS=
DB_HOST=localhost

JWT_SECRET=ton_secret_super_securise_pour_jwt_dark_romance_2024
```

5. **Démarrer le serveur**
```bash
npm run dev
```

Le serveur démarre sur `http://localhost:4000`

---

## 📖 Documentation API

### Swagger UI

La documentation interactive est accessible sur :
```
http://localhost:4000/api-docs
```

### Endpoints disponibles

#### Authentification

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/api/auth/register` | Créer un compte | Non |
| POST | `/api/auth/login` | Se connecter | Non |

#### Livres

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/api/livres` | Récupérer tous les livres | Oui |
| GET | `/api/livres/:id` | Récupérer un livre par ID | Oui |
| POST | `/api/livres` | Créer un nouveau livre | Oui |
| PUT | `/api/livres/:id` | Modifier un livre | Oui |
| DELETE | `/api/livres/:id` | Supprimer un livre | Oui |

---

## 🔐 Authentification

### 1. Créer un compte

**Requête :**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "motdepasse123"
}
```

**Réponse :**
```
User bien créé !
```

### 2. Se connecter

**Requête :**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "motdepasse123"
}
```

**Réponse :**
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Utiliser le token

Pour les routes protégées, ajouter le header :
```
Authorization: Bearer <votre_token_jwt>
```

---

## 📚 Modèle de données

### Livre

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | Integer | Auto | Identifiant unique |
| `titre` | String(200) | Oui | Titre du livre |
| `auteur` | String(100) | Oui | Auteur du livre |
| `nombreSujets` | Integer | Oui | Nombre de sujets abordés |
| `resume` | Text | Non | Résumé du livre |
| `anneePublication` | Integer | Non | Année de publication |
| `niveauDarkness` | Enum | Oui | Niveau : léger, modéré, intense, extrême |
| `disponible` | Boolean | Oui | Disponibilité (défaut: true) |
| `createdAt` | DateTime | Auto | Date de création |
| `updatedAt` | DateTime | Auto | Date de mise à jour |

---

## 🧪 Tests avec Thunder Client

### Exemple : Créer un livre

**Requête :**
```bash
POST /api/livres
Authorization: Bearer <votre_token>
Content-Type: application/json

{
  "titre": "Twisted Love",
  "auteur": "Ana Huang",
  "nombreSujets": 3,
  "resume": "Une histoire de dark romance intense",
  "anneePublication": 2021,
  "niveauDarkness": "modéré"
}
```

**Réponse :**
```json
{
  "message": "Livre créé avec succès !",
  "livre": {
    "id": 1,
    "titre": "Twisted Love",
    "auteur": "Ana Huang",
    "nombreSujets": 3,
    "resume": "Une histoire de dark romance intense",
    "anneePublication": 2021,
    "niveauDarkness": "modéré",
    "disponible": true,
    "createdAt": "2025-12-17T16:00:00.000Z",
    "updatedAt": "2025-12-17T16:00:00.000Z"
  }
}
```

---

## 📁 Structure du projet
```
livres-api/
│
├── config/
│   └── database.js           # Configuration Sequelize
│
├── controllers/
│   ├── authController.js     # Logique authentification
│   ├── livreController.js    # Logique CRUD livres
│   └── users.js              # Logique gestion users
│
├── middlewares/
│   └── authMiddleware.js     # Vérification JWT
│
├── models/
│   ├── User.js               # Modèle utilisateur
│   └── livre.js              # Modèle livre
│
├── routes/
│   ├── auth.js               # Routes authentification
│   └── livre.js              # Routes livres
│
├── services/
│   ├── auth.js               # Service authentification
│   ├── livres.js             # Service CRUD livres
│   └── users.js              # Service users
│
├── .env.local                # Variables d'environnement
├── .gitignore                # Fichiers à ignorer
├── index.js                  # Point d'entrée
├── package.json              # Dépendances
├── swagger.js                # Configuration Swagger
└── README.md                 # Documentation
```

---

## 🔒 Sécurité

- ✅ Mots de passe hashés avec **bcrypt** (10 rounds)
- ✅ Authentification par **token JWT** (expiration 1h)
- ✅ Routes protégées par **middleware d'authentification**
- ✅ Validation des données avec **Sequelize validators**
- ✅ Variables sensibles dans fichier `.env.local` (non versionné)

---

## 📝 Scripts disponibles
```bash
# Démarrer en mode développement (avec nodemon)
npm run dev

# Démarrer en mode production
npm start
```

---

## 🐛 Problèmes courants

### Erreur "Token manquant"
→ Vérifiez que vous avez bien ajouté le header `Authorization: Bearer <token>`

### Erreur "Token invalide"
→ Votre token a peut-être expiré (validité: 1h), reconnectez-vous

### Erreur de connexion MySQL
→ Vérifiez que MySQL est lancé et que les credentials dans `.env.local` sont corrects

### Erreur "Validation error"
→ L'email existe déjà, utilisez un autre email

---

## 🎯 Améliorations futures

- [ ] Pagination pour GET /livres
- [ ] Filtres et recherche (par auteur, niveau, etc.)
- [ ] Upload d'images de couverture
- [ ] Système de favoris
- [ ] Notes et commentaires
- [ ] Tests unitaires et d'intégration

---

## 👨‍💻 Auteur

**Fatoumata Dite Tima Sidibé**

- GitHub: [@Timaa06](https://github.com/Timaa06)
- Email: fatoumataditetimas@gmail.com

---


---

## 🙏 Remerciements

- Projet réalisé dans le cadre d'un cours sur les API REST avec Node.js
- Inspiration : Communauté des lectrices de dark romance 🖤📚

---

**⭐ N'oubliez pas de star le projet si vous l'avez trouvé utile !**
