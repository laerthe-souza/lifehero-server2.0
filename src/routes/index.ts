import { Router } from 'express';

import { usersRoutes } from './users';
import { authRoutes } from './auth';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);

export { routes };
