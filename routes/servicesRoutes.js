import { Router } from "express";
import { services } from "../data/beautyServices.js";

const router = Router();

router.get("/", (req, res) => {
    res.json(services);
});

export default router;
