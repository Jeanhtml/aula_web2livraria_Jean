import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { CriarUsuarioDto } from '../usuarios.dto';
import { UsuariosTabela } from 'src/db/schemas';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsuariosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}
  async criarUsuario(usuario: CriarUsuarioDto) {
    try {
      await this.db.insert(UsuariosTabela).values({
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.password,
      });

      return usuario;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuário');
    }
  }
}
