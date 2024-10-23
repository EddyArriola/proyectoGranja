import { Module } from '@nestjs/common';
import { HuevoProduccionService } from './huevo-produccion.service';
import { HuevoProduccionController } from './huevo-produccion.controller';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HuevoProduccionController],
  providers: [HuevoProduccionService],
  imports: [prismaModule]
})
export class HuevoProduccionModule {}
