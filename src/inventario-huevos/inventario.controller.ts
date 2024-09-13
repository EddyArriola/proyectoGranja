import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, UploadedFiles} from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { dtoInventario, updateDto } from 'src/dto/inventario.dto';
import path from 'path';
import { inventario } from "@prisma/client";

@Controller('inventario')
export class InventarioController {

    constructor(private readonly inventarioService: InventarioService){
    }
     
    @Get()
    async GetAllInventario(){
        return this.inventarioService.getAllInventario();
    }

    @Get(':id')
    async GetInventarioById(@Param('id') id: string){
        const inventarioFound = await this.inventarioService.getInventarioByID(Number(id));
        if(!inventarioFound) throw new NotFoundException('el inventario no existe')
            return inventarioFound
    }

    @Post()
    async create(@Body() data: inventario){
        return this.inventarioService.createInventario(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            return await this.inventarioService.deleteInventario(Number(id));

        }catch(error){
            throw new NotFoundException("el inventario no existe")
        }
    }

    @Put(':id')
    async updateInventario(@Param('id') id: string, @Body() data: inventario) {
        try {
            return await this.inventarioService.updateInventario(Number(id), data); 
        } catch (error) {
            throw new NotFoundException("el inventario no existe")
        }
    }


}
