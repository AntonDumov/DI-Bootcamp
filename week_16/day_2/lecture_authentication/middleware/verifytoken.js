import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv()

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECERT);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}