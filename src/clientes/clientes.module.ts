import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClienteController } from './clientes.controller';
import { prismaModule } from '../prisma/prisma.module';

@Module({
  imports: [prismaModule],
  providers: [ClienteService],
  controllers: [ClienteController]
})
export class ClientesModule {}
