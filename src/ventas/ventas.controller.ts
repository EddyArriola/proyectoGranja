import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasHuevos } from '@prisma/client';

@Controller('ventas')
export class VentasController {
  
  constructor(private readonly VentasService: VentasService) {}

  @Get()
  async GetAll(){
      return this.VentasService.getAllVenta();
  }

  @Get(':id')
  async GetById(@Param('id') id: string){
      const VentasServiceFound = await this.VentasService.getVentaByID(Number(id));
      if(!VentasServiceFound) throw new NotFoundException('la venta no existe')
          return VentasServiceFound;
  }

  @Post()
  async create(@Body() data: VentasHuevos){
      return this.VentasService.createVenta(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
      try{
          return await this.VentasService.deleteVenta(Number(id));
          
      }catch(error){
          throw new NotFoundException("la venta no existe")
      }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VentasHuevos) {
      try {
          return await this.VentasService.updateVenta(Number(id), data); 
      } catch (error) {
          throw new NotFoundException("la venta no existe")
      }
  }


}
