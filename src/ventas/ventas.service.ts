import { Injectable } from '@nestjs/common';
import { VentasHuevos } from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VentasService {

    
  constructor(private prisma: prismaService){
  }

  async getAllVenta(): Promise<VentasHuevos[]>{
      return this.prisma.ventasHuevos.findMany();
  }

  async getVentaByID(VentaID: number): Promise<VentasHuevos>{
      return this.prisma.ventasHuevos.findUnique({
          where:{
              VentaID
          }
      })
  }

  async createVenta(data: VentasHuevos): Promise<VentasHuevos>{
      return this.prisma.ventasHuevos.create({
          data
      })
  }


  async updateVenta(VentaID: number, data: VentasHuevos): Promise<VentasHuevos>{
      return this.prisma.ventasHuevos.update({
          where: {
              VentaID
          }, data
      })
  }

  async deleteVenta(VentaID: number): Promise<VentasHuevos> {
      return this.prisma.ventasHuevos.delete({
          where: {
              VentaID
          }
      })
  }



}
