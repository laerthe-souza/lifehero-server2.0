import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

export class AuthController {
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
