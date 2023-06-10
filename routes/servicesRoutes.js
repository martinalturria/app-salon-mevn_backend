import { Router } from "express";
import {
    createServices,
    getServices,
    getServiceById,
    updateService,
    deleteService,
} from "../controllers/ServicesControllers.js";

const router = Router();

router.route("/").post(createServices).get(getServices);

router
    .route("/:id")
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService);

export default router;
