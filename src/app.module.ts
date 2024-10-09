import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduccionHuevosModule } from './produccion-huevos/produccion-huevos.module';
import { ProduccionHuevo } from './produccion-huevos/entities/produccion-huevo.entity';
import { InventarioController } from './inventario-huevos/inventario.controller';
import { InventarioService } from './inventario-huevos/inventario.service';
import { prismaModule } from './prisma/prisma.module';
import { InventarioHuevosModule } from './inventario-huevos/inventario-huevos.module';
import { ClienteController } from './clientes/clientes.controller';
import { ClienteService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { VentasModule } from './ventas/ventas.module';
import { VentasHuevos } from './ventas/entities/ventas-huevos.entity';
import { DetalleVenta } from './ventas/entities/Detalle.entity';
import { Clientes } from './ventas/entities/clientes.entity';
import { GalerasModule } from './galeras/galeras.module';
import { GalerasService } from './galeras/galeras.service';
import { GalerasController } from './galeras/galeras.controller';
import { GallinasModule } from './gallinas/gallinas.module';
import { GallinasController } from './gallinas/gallinas.controller';
import { GallinasService } from './gallinas/gallinas.service';

@Module({
  imports: [
    prismaModule,
    InventarioHuevosModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'LAPTOP-UE9FR5EG', // IP donde se encuentra la base de datos o LOCALHOST (127.0.0.1)
      port: 1433, // puerto
      username: 'sa', // usuario de base de datos
      password: '1vacasincola', // contraseña de base de datos
      database: 'GranjaAvicolaDB', // nombre de la base de datos
      entities: [
          ProduccionHuevo, 
          VentasHuevos,
          DetalleVenta,
          Clientes
      ], // Aquí se agregaran todas las entidades de base de datos.
      logging: false, // se establecio en falso para evitar que devuelva la consulta sql que esta realizando
      synchronize: false, // se establecio en false para evitar que se sobreescriba y afecte la base de datos, ya que ya esta definida
      options: {
        encrypt: false,
        trustServerCertificate: false,
      },
    }),
    //Despues de TypeOrmModule se agregaran todos los modulos siguientes.
    ProduccionHuevosModule,
    ClientesModule,
    VentasModule,
    GalerasModule,
    GallinasModule,
  ],
    controllers: [InventarioController, ClienteController, GalerasController, GallinasController],
    providers: [InventarioService, ClienteService, GalerasService, GallinasService]

})
export class AppModule {}
