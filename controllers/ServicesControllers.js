import { services } from "../data/beautyServices.js";
import Services from "../models/Services.js";
import { validateObject, validateService } from "../helpers/index.js";

const createServices = async (req, res) => {
    const { name, price } = req.body;

    try {
        if (!name || !price) {
            throw new Error("Todos los campos son obligatorios");
        }

        const service = new Services({ name, price });
        await service.save();

        return res.status(201).json({
            message: "El Servicio se Registro Correctamente",
        });
    } catch (error) {
        return res.status(400).json({ Error: error.message });
    }
};

const getServices = async (req, res) => {
    try {
        const services = await Services.find();

        return res.status(200).json(services);
    } catch (error) {
        return res.status(404).json({ Error: error.message });
    }
};

const getServiceById = async (req, res) => {
    const { id } = req.params;

    try {
        // Validar Object
        validateObject(id);

        const service = await Services.findById(id);

        // validar service
        validateService(service);

        return res
            .status(200)
            .json({ name: service.name, price: service.price });
    } catch (error) {
        return res.status(404).json({ Error: error.message });
    }
};

const updateService = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    try {
        validateObject(id);

        const service = await Services.findById(id);

        validateService(service);

        service.name = name || service.name;
        service.price = price || service.price;

        await service.save();

        return res.status(200).json({
            message: "El Servicio se Actualizo Correctamente",
        });
    } catch (error) {
        res.status(404).json({ Error: error.message });
    }
};

const deleteService = async (req, res) => {
    const { id } = req.params;

    try {
        validateObject(id);

        const service = await Services.findById(id);
        validateService(service);

        await service.deleteOne();

        return res.status(200).json({
            message: "El Servicio se Elimino Correctamente",
        });
    } catch (error) {
        return res.status(404).json({ Error: error.message });
    }
};

export {
    createServices,
    getServices,
    getServiceById,
    updateService,
    deleteService,
};
