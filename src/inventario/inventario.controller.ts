import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import {Inventario} from '@prisma/client'

@Controller('inventario')
export class InventarioController {
    constructor(private readonly InventarioService: InventarioService) {}

    @Get()
    async GetAllInventario(){
        return this.InventarioService.getAllInventario();
    }

    @Get(':id')
    async GetInventarioById(@Param('id') id: string){
        const InventarioFound = await this.InventarioService.getInventarioByID(Number(id));
        if(!InventarioFound) throw new NotFoundException('el inventario no existe')
            return InventarioFound;
    }

    @Post()
    async create(@Body() data: Inventario){
        return this.InventarioService.createInventario(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            return await this.InventarioService.deleteInventario(Number(id));
            
        }catch(error){
            throw new NotFoundException("el Inventario no existe")
        }
    }

    @Put(':id')
    async updateGalera(@Param('id') id: string, @Body() data: Inventario) {
        try {
            return await this.InventarioService.updateInventario(Number(id), data); 
        } catch (error) {
            throw new NotFoundException("el inventario no existe")
        }
    }
}
