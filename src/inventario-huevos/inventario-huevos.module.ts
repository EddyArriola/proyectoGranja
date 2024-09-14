import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService],
  imports: [prismaModule]

})
export class InventarioHuevosModule {}
