import { User } from '@prisma/client';

import { database } from '../database';

export class ListUsersService {
  async execute(): Promise<User[]> {
    const users = await database.user.findMany();

    return users;
  }
}
