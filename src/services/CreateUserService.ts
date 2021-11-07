import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

import { database } from '../database';
import { AppError } from '../errors/AppError';
import { generateToken } from '../utils/generateToken';

type ICreateUserParams = {
  name: string;
  email: string;
  password: string;
};

type ICreateUserResponse = {
  user: User;
  token: string;
};

export class CreateUserService {
  async execute({
    name,
    email,
    password,
  }: ICreateUserParams): Promise<ICreateUserResponse> {
    const userAlreadyExists = await database.user.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await database.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user.id);

    return { user, token };
  }
}
