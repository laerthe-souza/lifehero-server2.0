import { Exclude, Transform } from 'class-transformer';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

export class User {
  id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

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
