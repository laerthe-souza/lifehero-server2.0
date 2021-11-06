import { database } from '../../database';

export class DeleteOngService {
  async execute(ongId: string): Promise<void> {
    await database.ong.delete({
      where: {
        id: ongId,
      },
    });
  }
}
