import { Module } from '@nestjs/common';
import { prismaModule } from './prisma/prisma.module';
import { ClienteController } from './clientes/clientes.controller';
import { ClienteService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { GalerasModule } from './galeras/galeras.module';
import { GalerasService } from './galeras/galeras.service';
import { GalerasController } from './galeras/galeras.controller';
import { GallinasModule } from './gallinas/gallinas.module';
import { GallinasController } from './gallinas/gallinas.controller';
import { GallinasService } from './gallinas/gallinas.service';
import { InventarioModule } from './inventario/inventario.module';
import { InventarioController } from './inventario/inventario.controller';
import { InventarioService } from './inventario/inventario.service';
import { TipoHuevoModule } from './tipo-huevo/tipo-huevo.module';
import { TipoHuevoController } from './tipo-huevo/tipo-huevo.controller';
import { TipoHuevoService } from './tipo-huevo/tipo-huevo.service';
import { HuevoProduccionModule } from './huevo-produccion/huevo-produccion.module';
import { HuevoProduccionController } from './huevo-produccion/huevo-produccion.controller';
import { HuevoProduccionService } from './huevo-produccion/huevo-produccion.service';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { DetalleVentaController } from './detalle-venta/detalle-venta.controller';
import { DetalleVentaService } from './detalle-venta/detalle-venta.service';
import { VentasModule } from './ventas/ventas.module';
import { VentasController } from './ventas/ventas.controller';
import { VentasService } from './ventas/ventas.service';

@Module({
  imports: [
    prismaModule,
    ClientesModule,
    GalerasModule,
    GallinasModule,
    InventarioModule,
    TipoHuevoModule,
    HuevoProduccionModule,
    DetalleVentaModule,
    VentasModule,
  ],
    controllers: [
        ClienteController,
        GalerasController,
        GallinasController,
        InventarioController,
        TipoHuevoController,
        HuevoProduccionController,
        DetalleVentaController,
        VentasController
      ],
    providers: [
      ClienteService, 
      GalerasService, 
      GallinasService, 
      InventarioService,
      TipoHuevoService,
      HuevoProduccionService,
      DetalleVentaService,
      VentasService
    ]

})
export class AppModule {}
