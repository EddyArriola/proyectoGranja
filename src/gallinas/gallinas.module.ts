import { Module } from '@nestjs/common';
import { GallinasService } from './gallinas.service';
import { GallinasController } from './gallinas.controller';
import { prismaService } from 'src/prisma/prisma.service';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GallinasController],
  providers: [GallinasService],
  imports: [prismaModule]
})
export class GallinasModule {}
