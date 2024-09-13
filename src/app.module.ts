import { Module } from '@nestjs/common';
import { GranjasModule } from './granjas/granjas.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller'; // Importa el AppController

@Module({
  imports: [GranjasModule],
  controllers: [AppController], // Incluye el AppController
  providers: [PrismaService],
})
export class AppModule {}
