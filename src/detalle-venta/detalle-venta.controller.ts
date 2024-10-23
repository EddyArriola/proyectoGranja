import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { DetalleVenta } from '@prisma/client';

@Controller('detalle-venta')
export class DetalleVentaController {
    constructor(private readonly DetalleVentaService: DetalleVentaService) {}

    @Get()
    async GetAll(){
        return this.DetalleVentaService.getAllDetalleVenta();
    }

    @Get(':id')
    async GetById(@Param('id') id: string){
        const DetalleVentaFound = await this.DetalleVentaService.getDetalleVentaByID(Number(id));
        if(!DetalleVentaFound) throw new NotFoundException('el detalle no existe')
            return DetalleVentaFound;
    }

    @Post()
    async create(@Body() data: DetalleVenta){
        return this.DetalleVentaService.createDetalleVenta(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            return await this.DetalleVentaService.deleteDetalleVenta(Number(id));
            
        }catch(error){
            throw new NotFoundException("el detalle de venta no existe")
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: DetalleVenta) {
        try {
            return await this.DetalleVentaService.updateDetalleVenta(Number(id), data); 
        } catch (error) {
            throw new NotFoundException("el detalle de venta no existe")
        }
    }

}
