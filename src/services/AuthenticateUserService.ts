import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

import { database } from '../database';
import { AppError } from '../errors/AppError';

type IAuthenticateUserService = {
  email: string;
  password: string;
};

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService): Promise<User> {
    const user = await database.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError('Invalid credentials');
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      throw new AppError('Invalid credentials');
    }

    return user;
  }
}
