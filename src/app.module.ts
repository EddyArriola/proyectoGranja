import { Module } from '@nestjs/common';
import { InventarioController } from './inventario-huevos/inventario.controller';
import { InventarioService } from './inventario-huevos/inventario.service';
import { prismaModule } from './prisma/prisma.module';
import { InventarioHuevosModule } from './inventario-huevos/inventario-huevos.module';

@Module({
  imports: [
    prismaModule,
    InventarioHuevosModule

  ],
    controllers: [InventarioController],
    providers: [InventarioService],
})
export class AppModule {}
