import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get('/', usersController.index);
usersRoutes.post('/', usersController.create);
usersRoutes.delete('/', ensureAuthentication, usersController.delete);

export { usersRoutes };
