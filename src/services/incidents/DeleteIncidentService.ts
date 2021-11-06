import { database } from '../../database';

export class DeleteIncidentService {
  async execute(incidentId: string): Promise<void> {
    await database.incident.delete({
      where: {
        id: incidentId,
      },
    });
  }
}
