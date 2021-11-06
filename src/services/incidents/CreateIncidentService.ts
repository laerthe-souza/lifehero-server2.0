import { Incident } from '.prisma/client';

import { database } from '../../database';

type ICreateIncidentParams = {
  title: string;
  description: string;
  value: number;
  images: Express.Multer.File[];
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

    const imagesUrl = images.map(image => {
      return `http://localhost:3333/uploads/${image.filename}`;
    });

    const formattedValue = Number(value * 100);

    const incident = await database.incident.create({
      data: {
        title,
        description,
        value: formattedValue,
        images: imagesUrl,
        ongId,
      },
    });

    return incident;
  }
}
