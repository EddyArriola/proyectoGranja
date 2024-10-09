import { Injectable } from '@nestjs/common';
import {Gallinas} from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GallinasService {
  constructor(private prisma: prismaService){}

     
  async getAllGallinas(): Promise<Gallinas[]>{
      return this.prisma.gallinas.findMany();
  }

  async getGallinaID(GallinaID: number): Promise<Gallinas>{
      return this.prisma.gallinas.findUnique({
          where:{
              GallinaID
          }
      });
  }

  async createGallina(data:Gallinas): Promise<Gallinas>{
      return this.prisma.gallinas.create({
          data
      });
  }

  async updateGallina(GallinaID: number,data: Gallinas): Promise<Gallinas>{
      return this.prisma.gallinas.update({
          where: {
              GallinaID
          }, data
      });
  }

  async deleteGallina(GallinaID:number): Promise<Gallinas>{
      return this.prisma.gallinas.delete({
          where: {
              GallinaID
          }
      });
  } 
}
