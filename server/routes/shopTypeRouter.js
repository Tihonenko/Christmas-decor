import { Router } from 'express';
const router = new Router();
import shopTypeController from '../controllers/shopTypeConroller.js';

router.post('/', shopTypeController.create);
router.get('/', shopTypeController.getAll);

export default router;
