import mongoose from "mongoose";

function validateObject(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`El id ${id} no es correcto`);
    }
}

function validateService(service) {
    if (!service) throw new Error("El Servicio no existe");
}

export { validateObject, validateService };
