import { Router } from 'express';

import { AuthController } from '../controllers/AuthController';

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post('/users', authController.user);
authRoutes.post('/ongs', authController.ong);

export { authRoutes };
