import express from "express"; // ES 6
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";


// Configurar la Aplicacion
const app = express();

// Conectar a Basa de Datos MongoDB
db();

// Definir una ruta
app.use("/api/services", servicesRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT, () => {
    console.log("El servidor se esta ejecutando en el puerto", PORT);
});
