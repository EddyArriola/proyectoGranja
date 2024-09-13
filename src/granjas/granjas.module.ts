import { Module } from '@nestjs/common';
import { GranjasController } from './granjas.controller';
import { GranjasService } from './granjas.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [GranjasController],
  providers: [GranjasService, PrismaService],
})
export class GranjasModule {}
