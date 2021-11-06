import bcrypt from 'bcrypt';
import { Ong } from '@prisma/client';

import { database } from '../../database';
import { AppError } from '../../errors/AppError';
import { generateToken } from '../../utils/generateToken';

type IAuthenticateOngParams = {
  email: string;
  password: string;
};

type IAuthenticateOngResponse = {
  ong: Ong;
  token: string;
};

export class AuthenticateOngService {
  async execute({
    email,
    password,
  }: IAuthenticateOngParams): Promise<IAuthenticateOngResponse> {
    const ong = await database.ong.findFirst({
      where: {
        email,
      },
    });

    if (!ong) {
      throw new AppError('Invalid credentials');
    }

    const correctPassword = await bcrypt.compare(password, ong.password);

    if (!correctPassword) {
      throw new AppError('Invalid credentials');
    }

    const token = generateToken(ong.id);

    return { ong, token };
  }
}
