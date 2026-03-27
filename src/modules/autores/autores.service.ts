import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

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
  listarAutores() {
    if (!autores) {
      return 'nao ha autores';
    }
    return autores;
  }

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado');
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });

    return autores;
  }

  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome e email são obrigatórios');
    }

    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }

    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
