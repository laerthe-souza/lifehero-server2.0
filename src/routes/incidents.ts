import { Router } from 'express';

import { IncidentsController } from '../controllers/IncidentsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const incidentsRoutes = Router();

const incidentsController = new IncidentsController();

incidentsRoutes.post('/', ensureAuthentication, incidentsController.create);
incidentsRoutes.delete(
  '/:id',
  ensureAuthentication,
  incidentsController.delete,
);

export { incidentsRoutes };
