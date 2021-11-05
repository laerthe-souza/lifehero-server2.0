import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';

export class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        email,
        password,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
