import { Injectable } from '@nestjs/common';
import { HuevosProduccion } from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HuevoProduccionService {
  
  constructor(private prisma: prismaService){

  }

  async getAllHuevosProduccion(): Promise<HuevosProduccion[]>{
      return this.prisma.huevosProduccion.findMany();
  }

  async getHuevosProduccionByID(ProduccionID: number): Promise<HuevosProduccion>{
      return this.prisma.huevosProduccion.findUnique({
          where:{
              ProduccionID
          }
      })
  }

  async createHuevosProduccion(data: HuevosProduccion): Promise<HuevosProduccion>{
      return this.prisma.huevosProduccion.create({
          data
      })
  }


  async updateHuevosProduccion(ProduccionID: number, data: HuevosProduccion): Promise<HuevosProduccion>{
      return this.prisma.huevosProduccion.update({
          where: {
              ProduccionID
          }, data
      })
  }

  async deleteHuevosProduccion(ProduccionID: number): Promise<HuevosProduccion> {
      return this.prisma.huevosProduccion.delete({
          where: {
              ProduccionID
          }
      })
  }


}
