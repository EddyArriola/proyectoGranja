import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ClienteService],
  controllers: [ClientesController]
})
export class ClientesModule {}
