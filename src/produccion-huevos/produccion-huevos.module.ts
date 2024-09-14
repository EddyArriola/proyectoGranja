import { Module } from '@nestjs/common';
import { ProduccionHuevosService } from './produccion-huevos.service';
import { ProduccionHuevosController } from './produccion-huevos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduccionHuevo } from './entities/produccion-huevo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduccionHuevo])],
  controllers: [ProduccionHuevosController],
  providers: [ProduccionHuevosService],
  exports: [TypeOrmModule],
})
export class ProduccionHuevosModule {}
