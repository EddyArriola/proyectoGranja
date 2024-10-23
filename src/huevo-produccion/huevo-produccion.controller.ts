import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { HuevoProduccionService } from './huevo-produccion.service';
import { HuevosProduccion } from '@prisma/client';

@Controller('produccion-huevos')
export class HuevoProduccionController {
  
  constructor(private readonly HuevoProduccionService: HuevoProduccionService) {}

  @Get('/obtener-todo')
  async GetAllTipoHuevo(){
      return this.HuevoProduccionService.getAllHuevosProduccion();
  }
  
  @Get('/buscar-por-id/:id')
  async GetHuevoProduccionById(@Param('id') id: string){
      const HuevoProduccionFound = await this.HuevoProduccionService.getHuevosProduccionByID(Number(id));
      if(!HuevoProduccionFound) throw new NotFoundException('la produccion de huevos no existe')
          return HuevoProduccionFound;
  }
  
  @Post('/crear')
  async create(@Body() data: HuevosProduccion){
      return this.HuevoProduccionService.createHuevosProduccion(data);
  }
  
  @Delete('/eliminar/:id')
  async delete(@Param('id') id: string){
      try{
          return await this.HuevoProduccionService.deleteHuevosProduccion(Number(id));
          
      }catch(error){
          throw new NotFoundException("la produccion de huevos no existe")
      }
  }
  
  @Put('/actualizar/:id')
  async updateHuevoProduccion(@Param('id') id: string, @Body() data: HuevosProduccion) {
      try {
          return await this.HuevoProduccionService.updateHuevosProduccion(Number(id), data); 
      } catch (error) {
          throw new NotFoundException("la produccion de huevos no existe")
      }
  }
}
