import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { LivrosRepository } from './livros.repository';
import { AutoresModule } from '../autores.module';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [AutoresModule],
})
export class LivrosModule {}
