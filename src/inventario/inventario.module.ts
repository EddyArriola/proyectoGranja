import { Module } from '@nestjs/common';
import { InventarioController } from './inventario.controller';
import { TypeormService } from './typeorm/typeorm.service';
import { InventarioService } from './inventario/inventario.service';

@Module({
  controllers: [InventarioController],
  providers: [TypeormService, InventarioService]
})
export class InventarioModule {}
