import { Router } from "express";
import shopItemController from "../controllers/shopItemController.js";

const router = new Router();

router.post("/", shopItemController.create);
router.get("/", shopItemController.getAll);
router.get("/:id", shopItemController.getOne);
router.delete("/:id", shopItemController.removeShop);

export default router;
