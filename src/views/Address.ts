import { Transform } from 'class-transformer';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

export class Address {
  id: string;

  street: string;

  number: number;

  city: string;

  state: string;

  zipcode: string;

  country: string;

  @Transform(createdAt =>
    format(createdAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  createdAt: Date;

  @Transform(updatedAt =>
    format(updatedAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  updatedAt: Date;
}
