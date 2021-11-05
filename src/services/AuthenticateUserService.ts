import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

import { database } from '../database';
import { AppError } from '../errors/AppError';
import { generateToken } from '../utils/generateToken';

type IAuthenticateUserParams = {
  email: string;
  password: string;
};

type IAuthenticateUserResponse = {
  user: User;
  token: string;
};

export class AuthenticateUserService {
  async execute({
    email,
    password,
  }: IAuthenticateUserParams): Promise<IAuthenticateUserResponse> {
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

    const token = generateToken(user.id);

    return { user, token };
  }
}
