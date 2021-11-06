import { Incident } from '.prisma/client';

import { database } from '../../database';

type ICreateIncidentParams = {
  title: string;
  description: string;
  value: number;
  images: string[];
  ongId: string;
};

export class CreateIncidentService {
  async execute({
    title,
    description,
    value,
    images,
    ongId,
  }: ICreateIncidentParams): Promise<Incident> {
    const incidentTitleAlreadyExists = await database.incident.findFirst({
      where: { title },
    });

    if (incidentTitleAlreadyExists) {
      throw new Error('Incident title already exists');
    }

    const incident = await database.incident.create({
      data: {
        title,
        description,
        value,
        images,
        ongId,
      },
    });

    return incident;
  }
}
