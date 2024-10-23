import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { TipoHuevoService } from './tipo-huevo.service';
import { TipoHuevo } from '@prisma/client';

@Controller('tipo-huevo')
export class TipoHuevoController {
    constructor(private readonly tipoHuevoService: TipoHuevoService) {}

@Get()
async GetAllTipoHuevo(){
    return this.tipoHuevoService.getAllTipoHuevo();
}

@Get(':id')
async GetTipoHuevoById(@Param('id') id: string){
    const TipoHuevoFound = await this.tipoHuevoService.getTipoHuevoByID(Number(id));
    if(!TipoHuevoFound) throw new NotFoundException('el tipo de huevo no existe')
        return TipoHuevoFound;
}

@Post()
async create(@Body() data: TipoHuevo){
    return this.tipoHuevoService.createTipoHuevo(data);
}

@Delete(':id')
async delete(@Param('id') id: string){
    try{
        return await this.tipoHuevoService.deleteTipoHuevo(Number(id));
        
    }catch(error){
        throw new NotFoundException("el tipo de huevo no existe")
    }
}

@Put(':id')
async updateGalera(@Param('id') id: string, @Body() data: TipoHuevo) {
    try {
        return await this.tipoHuevoService.updateTipoHuevo(Number(id), data); 
    } catch (error) {
        throw new NotFoundException("el tipo de huevo no existe")
    }
}}
