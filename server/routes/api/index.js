import { Router } from 'express';
import todoRouter from './todoRouter';

const router = new Router();

router.use('/todos', todoRouter);

export default router;
