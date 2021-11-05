import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get('/', usersController.index);
usersRoutes.post('/', usersController.create);
usersRoutes.delete('/:id', usersController.delete);

export { usersRoutes };
