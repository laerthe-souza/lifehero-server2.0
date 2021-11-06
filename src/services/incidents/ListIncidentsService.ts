import { Incident } from '.prisma/client';

import { database } from '../../database';

export class ListIncidentsService {
  async execute(): Promise<Incident[]> {
    const incidents = await database.incident.findMany();

    return incidents;
  }
}
