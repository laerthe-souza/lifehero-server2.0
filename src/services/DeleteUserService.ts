import { database } from '../database';

export class DeleteUserService {
  async execute(userId: string): Promise<void> {
    await database.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
