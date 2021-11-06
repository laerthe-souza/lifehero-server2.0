import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { AuthenticateOngService } from '../services/ongs/AuthenticateOngService';

export class AuthController {
  async ong(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateOng = new AuthenticateOngService();

    const { ong, token } = await authenticateOng.execute({
      email,
      password,
    });

    return response.status(200).json({ ong, token });
  }

  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(200).json({ user, token });
  }
}
