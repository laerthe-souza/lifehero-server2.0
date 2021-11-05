import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

import { database } from '../database';
import { AppError } from '../errors/AppError';

type ICreateUserParams = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserService {
  async execute({ name, email, password }: ICreateUserParams): Promise<User> {
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

    return user;
  }
}
