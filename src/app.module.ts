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
      entities: [ProduccionHuevo], // Aquí se agregaran todas las entidades de base de datos.
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

  ],
    controllers: [InventarioController, ClienteController],
    providers: [InventarioService, ClienteService]

})
export class AppModule {}
