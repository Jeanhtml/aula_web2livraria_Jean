import { Module } from '@nestjs/common';
import { AutoresController } from './autores/autores.controller';
import { AutoresService } from './autores/autores.service';
import { AutoresRepository } from './autores/autores.repository';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService, AutoresRepository],
  exports: [],
})
export class AutoresModule {}
