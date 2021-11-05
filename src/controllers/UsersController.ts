import { Request, Response } from 'express';

import { ListUsersService } from '../services/ListUsersService';
import { CreateUserService } from '../services/CreateUserService';

export class UsersController {
  async index(request: Request, response: Response) {
    const listUsers = new ListUsersService();

    const users = await listUsers.execute();

    return response.status(200).json(users);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
