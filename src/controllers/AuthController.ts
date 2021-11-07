import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { AuthenticateOngService } from '../services/ongs/AuthenticateOngService';
import { Ong } from '../views/Ong';
import { User } from '../views/User';

export class AuthController {
  async ong(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateOng = new AuthenticateOngService();

    const { ong, token } = await authenticateOng.execute({
      email,
      password,
    });

    return response.custom(201, Ong, { ...ong, token });
  }

  async user(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.custom(201, User, { ...user, token });
  }
}
