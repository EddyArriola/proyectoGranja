import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './inventario/typeorm/typeorm.service';
import { inventarios } from './inventario/inventario.modelos';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature([inventarios]),
    UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
