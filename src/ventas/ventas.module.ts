import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
  imports: [prismaModule]
})
export class VentasModule {}
