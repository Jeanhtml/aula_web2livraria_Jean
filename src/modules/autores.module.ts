import { Module } from '@nestjs/common';
import { AutoresController } from './autores/autores.controller';
import { AutoresService } from './autores/autores.service';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [],
})
export class AutoresModule {}
