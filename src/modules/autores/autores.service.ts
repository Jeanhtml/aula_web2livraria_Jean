import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria da Silva',
    email: 'maria.silva@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro da Silva',
    email: 'pedro.silva@gmail.com',
  },
];
@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    } else if (autorEncontrado.ativo === false)
      throw new NotFoundException('Autor com id $(id) está inativo');
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarautor(bodyRequest);
  }

  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    this.listarAutor(idAutor);
    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  async deletarAutor(idAutor: number) {
    await this.listarAutor(idAutor);

    return await this.autoresRepository.deletarAutor(idAutor);
  }
}

  async inativarAutor(idAutor: number) {
  await this.listarAutor(idAutor);

  return this.autoresRepository.inativarAutor(idAutor);
}
