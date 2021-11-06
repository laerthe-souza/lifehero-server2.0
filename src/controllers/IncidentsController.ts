import { Request, Response } from 'express';
import { CreateIncidentService } from '../services/incidents/CreateIncidentService';

export class IncidentsController {
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
}
