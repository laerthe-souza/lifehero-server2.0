import { Router } from 'express';

import { usersRoutes } from './users';
import { authRoutes } from './auth';
import { ongsRoutes } from './ongs';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/ongs', ongsRoutes);

export { routes };
