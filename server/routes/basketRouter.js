import { Router } from "express";
import basketController from "../controllers/basketController.js";
import CheckAuth from "../utils/checkAuth.js";
const router = new Router();

router.post("/decor", CheckAuth, basketController.addDecorItem);
router.post("/shop", CheckAuth, basketController.addShopItem);
router.get("/", CheckAuth, basketController.getBasket);
router.delete("/:id", CheckAuth, basketController.removeBasketItem);

export default router;
