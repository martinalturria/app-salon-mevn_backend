import { Router } from "express";
import {
    createServices,
    getServices,
    getServiceById,
    updateService,
    deleteService
} from "../controllers/ServicesControllers.js";

const router = Router();

router.post("/", createServices);
router.get("/", getServices);

router.get("/:id", getServiceById);
router.put("/:id", updateService);
router.delete("/:id", deleteService)

export default router;
