import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasHuevos } from './entities/ventas-huevos.entity';
import { InventarioHuevos } from './entities/inventario-huevos.entity';
import { Clientes } from './entities/clientes.entity'; // Opcional
import { VentasClientes } from './entities/ventas-clientes.entity'; // Opcional
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VentasHuevos, 
      InventarioHuevos, 
      Clientes,        // Opcional
      VentasClientes   // Opcional
    ]),
  ],
  providers: [VentasService],
  controllers: [VentasController],
})
export class VentasModule {}
