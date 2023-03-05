import { Router } from "express";
import * as TaskController from "../controllers/taskController";

const router = Router();

router.get('/', TaskController.test);

export default router;