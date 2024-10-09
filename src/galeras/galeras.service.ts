import { Injectable } from '@nestjs/common';
import { prismaService } from 'src/prisma/prisma.service';
import {Galeras} from '@prisma/client'

@Injectable()
export class GalerasService {
  constructor(private prisma: prismaService){

  }

  async getAllGaleras(): Promise<Galeras[]>{
      return this.prisma.galeras.findMany();
  }

  async getGalerasByID(GaleraID: number): Promise<Galeras>{
      return this.prisma.galeras.findUnique({
          where:{
              GaleraID

          }
      })
  }

  async createGalera(data: Galeras): Promise<Galeras>{
      return this.prisma.galeras.create({
          data
      })
  }

  
  async updateGalera(GaleraID: number, data: Galeras): Promise<Galeras>{
      return this.prisma.galeras.update({
          where: {
              GaleraID
          }, data

      })
  }

  async deleteInventario(GaleraID: number): Promise<Galeras> {
      return this.prisma.galeras.delete({
          where: {
              GaleraID
          }
      })
  }
}
