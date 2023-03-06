import { Router } from "express";
import * as TaskController from "../controllers/taskController";

const router = Router();

router.get('/task', TaskController.all);
router.post('/task', TaskController.add);
router.put('/task/:id', TaskController.update);
router.delete('/task/:id', TaskController.remove);

export default router;