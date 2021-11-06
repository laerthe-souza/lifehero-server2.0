import { Router } from 'express';

import { OngsController } from '../controllers/OngsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const ongsRoutes = Router();

const ongsController = new OngsController();

ongsRoutes.post('/', ongsController.create);
ongsRoutes.delete('/', ensureAuthentication, ongsController.delete);

export { ongsRoutes };
