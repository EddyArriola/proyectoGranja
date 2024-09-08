import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduccionHuevosModule } from './produccion-huevos/produccion-huevos.module';
import { ProduccionHuevo } from './produccion-huevos/entities/produccion-huevo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.16.60.253', // IP donde se encuentra la base de datos o LOCALHOST (127.0.0.1)
      port: 1433, // puerto
      username: 'sa', // usuario de base de datos
      password: '', // contraseña de base de datos
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
