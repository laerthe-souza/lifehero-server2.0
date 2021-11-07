import { Request, Response } from 'express';

import { ListUsersService } from '../services/ListUsersService';
import { CreateUserService } from '../services/CreateUserService';
import { DeleteUserService } from '../services/DeleteUserService';
import { User } from '../views/User';

export class UsersController {
  async index(request: Request, response: Response) {
    const listUsers = new ListUsersService();

    const users = await listUsers.execute();

    return response.custom(200, User, users);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const { user, token } = await createUser.execute({
      name,
      email,
      password,
    });

    return response.custom(201, User, { ...user, token });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.user;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute(id);

    return response.status(204).send();
  }
}
