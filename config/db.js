import mongoose from "mongoose";
import dotenv from "dotenv";

// Variables de entorno
dotenv.config();

export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        const url = `${db.connection.host}:${db.connection.port}`;

        console.log("MongoSB se conecto correctamente", url);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // Si falla la conexion, detenemos la ejecucion del Programa (0) es todo bien (1) es Error
    }
};

console.log("Probando GIT");