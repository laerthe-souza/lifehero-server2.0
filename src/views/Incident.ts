import { Transform } from 'class-transformer';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

export class Incident {
  id: string;

  title: string;

  description: string;

  @Transform(props => {
    return props.value / 100;
  })
  value: number;

  images: string[];

  ongId: string;

  @Transform(createdAt =>
    format(createdAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  createdAt: Date;

  @Transform(updatedAt =>
    format(updatedAt.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  )
  updatedAt: Date;
}
