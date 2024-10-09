import { Module } from '@nestjs/common';
import { GalerasService } from './galeras.service';
import { GalerasController } from './galeras.controller';
import { prismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GalerasController],
  providers: [GalerasService],
  imports: [prismaModule]
})
export class GalerasModule {}
