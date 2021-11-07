import { Exclude, Transform, Type } from 'class-transformer';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

import { Incident } from './Incident';
import { Address } from './Address';

export class Ong {
  id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  cnpj: string;

  phone: string;

  @Type(() => Address)
  address: Address;

  @Type(() => Incident)
  incidents: Incident[];

  @Transform(createdAt =>
    format(createdAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  createdAt: Date;

  @Transform(updatedAt =>
    format(updatedAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  updatedAt: Date;

  @Transform(token => {
    if (token) {
      return token.value;
    }

    return null;
  })
  token?: string;
}
