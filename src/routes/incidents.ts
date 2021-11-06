import { Router } from 'express';

import { IncidentsController } from '../controllers/IncidentsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const incidentsRoutes = Router();

const incidentsController = new IncidentsController();

incidentsRoutes.get('/', incidentsController.index);
incidentsRoutes.post('/', ensureAuthentication, incidentsController.create);
incidentsRoutes.delete(
  '/:id',
  ensureAuthentication,
  incidentsController.delete,
);

export { incidentsRoutes };
