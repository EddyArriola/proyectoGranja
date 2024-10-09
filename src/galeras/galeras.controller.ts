import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { GalerasService } from './galeras.service';
import {Galeras} from '@prisma/client'

@Controller('galeras')
export class GalerasController {
  constructor(private readonly galerasService: GalerasService) {}

  @Get()
  async GetAllGaleras(){
      return this.galerasService.getAllGaleras();
  }

  @Get(':id')
  async GetGaleraById(@Param('id') id: string){
      const galerasFound = await this.galerasService.getGalerasByID(Number(id));
      if(!galerasFound) throw new NotFoundException('la galera no existe')
          return galerasFound;
  }

  @Post()
  async create(@Body() data: Galeras){
      return this.galerasService.createGalera(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
      try{
          return await this.galerasService.deleteInventario(Number(id));
          
      }catch(error){
          throw new NotFoundException("la galera no existe")
      }
  }

  @Put(':id')
  async updateGalera(@Param('id') id: string, @Body() data: Galeras) {
      try {
          return await this.galerasService.updateGalera(Number(id), data); 
      } catch (error) {
          throw new NotFoundException("la galera no existe")
      }
  }
}
