import { Module } from '@nestjs/common';
import { TipoHuevoService } from './tipo-huevo.service';
import { TipoHuevoController } from './tipo-huevo.controller';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TipoHuevoController],
  providers: [TipoHuevoService],
  imports: [prismaModule]
})
export class TipoHuevoModule {}
