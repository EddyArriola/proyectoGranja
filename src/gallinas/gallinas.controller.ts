import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GallinasService } from './gallinas.service';
import {Gallinas} from '@prisma/client'

@Controller('gallinas')
export class GallinasController {
  constructor(private readonly gallinasService: GallinasService) {}
  @Get()
  async getAllGallinas(){
      return this.gallinasService.getAllGallinas();
  }

  @Get(':id')
  async getGallinaByID(@Param('id')id: string){
      return this.gallinasService.getGallinaID(Number(id))
  }

  @Post()
  async createGallina(@Body() data: Gallinas){
      return this.gallinasService.createGallina(data);
  }

  @Delete(':id')
  async deleteGallina(@Param('id')id: string){
      return this.gallinasService.deleteGallina(Number(id))
  }

  @Put(':id')
  async UpdateGallina(@Param('id')id: string, @Body() data:Gallinas){
      return this.gallinasService.updateGallina(Number(id), data)
  }
}
