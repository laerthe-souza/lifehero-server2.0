import bcrypt from 'bcrypt';
import { Ong } from '.prisma/client';

import { database } from '../../database';
import { generateToken } from '../../utils/generateToken';

type ICreateOngParams = {
  name: string;
  email: string;
  password: string;
  cnpj: string;
  phone: string;
  street: string;
  number: number;
  city: string;
  state: string;
  zipcode: string;
  country: string;
};

type ICreateOngResponse = {
  ong: Ong;
  token: string;
};

export class CreateOngService {
  async execute({
    name,
    email,
    password,
    cnpj,
    phone,
    street,
    number,
    city,
    state,
    zipcode,
    country,
  }: ICreateOngParams): Promise<ICreateOngResponse> {
    const ongAlreadyExists = await database.ong.findFirst({
      where: { email },
    });

    if (ongAlreadyExists) {
      throw new Error('ONG already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const ong = await database.ong.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cnpj,
        phone,
        address: {
          create: {
            street,
            number,
            city,
            state,
            zipcode,
            country,
          },
        },
      },
      include: {
        address: true,
      },
    });

    const token = generateToken(ong.id);

    return { ong, token };
  }
}
