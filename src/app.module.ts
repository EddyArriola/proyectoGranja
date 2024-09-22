import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'satNAS666$$',
      database: 'GranjaAvicolaDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Solo en desarrollo
      
      options: {"trustServerCertificate": true}
    }),
    VentasModule,
  ],
})
export class AppModule {}
