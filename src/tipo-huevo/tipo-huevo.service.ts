import { Injectable } from '@nestjs/common';
import { TipoHuevo } from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TipoHuevoService {
  constructor(private prisma: prismaService){

  }

  async getAllTipoHuevo(): Promise<TipoHuevo[]>{
      return this.prisma.tipoHuevo.findMany();
  }

  async getTipoHuevoByID(HuevoID: number): Promise<TipoHuevo>{
      return this.prisma.tipoHuevo.findUnique({
          where:{
              HuevoID
          }
      })
  }

  async createTipoHuevo(data: TipoHuevo): Promise<TipoHuevo>{
      return this.prisma.tipoHuevo.create({
          data
      })
  }


  async updateTipoHuevo(HuevoID: number, data: TipoHuevo): Promise<TipoHuevo>{
      return this.prisma.tipoHuevo.update({
          where: {
              HuevoID
          }, data
      })
  }

  async deleteTipoHuevo(HuevoID: number): Promise<TipoHuevo> {
      return this.prisma.tipoHuevo.delete({
          where: {
              HuevoID
          }
      })
  }

}
