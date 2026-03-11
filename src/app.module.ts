import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores.module';
@Module({
  imports: [AutoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
