import { Module } from '@nestjs/common';
import { ClientesController } from './clientes/clientes.controller';
import { ClienteService } from './clientes/clientes.service';
import { PrismaModule } from './prisma/prisma.module';

import { ClientesModule } from './clientes/clientes.module';



@Module({
  imports: [
    PrismaModule,
    ClientesModule

  ],
    controllers: [ClientesController],
    providers: [ClienteService],
})
export class AppModule {}
