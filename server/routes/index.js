import { Router } from "express";
const router = new Router();

import userRouter from "./userRouter.js";
import typeRouter from "./typeRouter.js";
import decorRouter from "./decorRouter.js";
import shopItemRouter from "./shopItemRouter.js";
import shopTypeRouter from "./shopTypeRouter.js";
import basketRouter from "./basketRouter.js";

router.use("/user", userRouter);
router.use("/decor", decorRouter);
router.use("/type", typeRouter);
router.use("/shopitem", shopItemRouter);
router.use("/shoptype", shopTypeRouter);
router.use("/basket", basketRouter);

export default router;
