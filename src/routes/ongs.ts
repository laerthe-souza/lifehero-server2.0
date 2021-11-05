import { Router } from 'express';

import { OngsController } from '../controllers/OngsController';

const ongsRoutes = Router();

const ongsController = new OngsController();

ongsRoutes.post('/', ongsController.create);

export { ongsRoutes };
