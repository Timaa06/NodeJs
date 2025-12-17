const jwt = require("jsonwebtoken")
const authService = require("../services/auth")

const login = async (email, password) => {
    if(typeof email == 'undefined' || typeof password == 'undefined'){
        throw new Error("Vous devez renseigner tous les champs")
    }
    
    try {
        const result = await authService.login(email, password)
        
        // Créer un payload simple pour le JWT
        const payload = {
            id: result.id,
            email: result.email,
            username: result.username
        }
        
        // Signer le token avec le payload simple
        return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
    } catch (error) {
        throw error;
    }
}

module.exports = {
    login
};