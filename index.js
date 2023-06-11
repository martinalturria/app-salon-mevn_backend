import express from "express"; // ES 6
import colors from "colors";
import cors from "cors";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";

// Configurar la Aplicacion
const app = express();

// Conectar a Basa de Datos MongoDB
db();

// Configuramos los Cors
const whiteList = [process.env.FRONTEND_URL]; // Lista de dominios permitidos,

if (process.argv[2] === "--insomnia") {
    whiteList.push(undefined);
}

const corsOptionis = {
    origin: (origin, callback) => {
        // El origin es el dominio del cual viene la peticion, y el callback es para aceptar o denegar el acceso
        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"), null);
        }
    },
};

app.use(cors(corsOptionis));

// Middlewares
app.use(express.json());

// Definir una ruta
app.use("/api/services", servicesRoutes);

const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT, () => {
    console.log(
        colors.blue(
            "El servidor se esta ejecutando en el puerto",
            colors.bold.blue(PORT)
        )
    );
});
