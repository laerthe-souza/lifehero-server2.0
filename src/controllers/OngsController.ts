import { Request, Response } from 'express';
import { CreateOngService } from '../services/ongs/CreateOngService';

export class OngsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      cnpj,
      phone,
      street,
      number,
      city,
      state,
      zipcode,
      country,
    } = request.body;

    const createOng = new CreateOngService();

    const { ong, token } = await createOng.execute({
      name,
      email,
      password,
      cnpj,
      phone,
      street,
      number,
      city,
      state,
      zipcode,
      country,
    });

    return response.json({ ong, token });
  }
}
