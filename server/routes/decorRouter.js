import { Router } from "express";
import decorController from "../controllers/decorController.js";
const router = new Router();

router.post("/", decorController.create);
router.get("/", decorController.getAll);
router.get("/:id", decorController.getOne);
router.delete("/:id", decorController.removeDecor);

export default router;
