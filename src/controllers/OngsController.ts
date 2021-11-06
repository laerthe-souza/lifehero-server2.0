import { Request, Response } from 'express';

import { CreateOngService } from '../services/ongs/CreateOngService';
import { DeleteOngService } from '../services/ongs/DeleteOngService';
import { ListOngsService } from '../services/ongs/ListOngsService';

export class OngsController {
  async index(request: Request, response: Response) {
    const listOngs = new ListOngsService();

    const ongs = await listOngs.execute();

    return response.json(ongs);
  }

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

  async delete(request: Request, response: Response) {
    const { id } = request.user;

    const deleteOng = new DeleteOngService();

    await deleteOng.execute(id);

    return response
      .status(204)
      .json({ status: 'success', message: 'ONG deleted successfully' });
  }
}
