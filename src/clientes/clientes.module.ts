import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { prismaModule } from '../prisma/prisma.module';

@Module({
  imports: [prismaModule],
  providers: [ClienteService],
  controllers: [ClientesController]
})
export class ClientesModule {}
