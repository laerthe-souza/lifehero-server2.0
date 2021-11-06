import { Router } from 'express';

import { upload } from '../configs/multer';
import { IncidentsController } from '../controllers/IncidentsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const incidentsRoutes = Router();

const incidentsController = new IncidentsController();

incidentsRoutes.get('/', incidentsController.index);
incidentsRoutes.post(
  '/',
  ensureAuthentication,
  upload.array('photos', 5),
  incidentsController.create,
);
incidentsRoutes.delete(
  '/:id',
  ensureAuthentication,
  incidentsController.delete,
);

export { incidentsRoutes };
