import { Request, Response } from 'express';

import { CreateIncidentService } from '../services/incidents/CreateIncidentService';
import { DeleteIncidentService } from '../services/incidents/DeleteIncidentService';
import { ListIncidentsService } from '../services/incidents/ListIncidentsService';

export class IncidentsController {
  async index(request: Request, response: Response) {
    const listIncidents = new ListIncidentsService();

    const incidents = await listIncidents.execute();

    return response.status(200).json(incidents);
  }

  async create(request: Request, response: Response) {
    const { id } = request.user;
    const { title, description, value } = request.body;

    const createIncident = new CreateIncidentService();

    const incident = await createIncident.execute({
      title,
      description,
      value,
      images: [''],
      ongId: id,
    });

    return response.status(201).json(incident);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleleIncident = new DeleteIncidentService();

    await deleleIncident.execute(id);

    return response
      .status(204)
      .json({ message: 'Incident deleted successfully' });
  }
}
