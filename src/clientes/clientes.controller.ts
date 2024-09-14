import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, UploadedFiles} from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { DtoClientes, UpdateDto } from 'src/dto/clientes.dto';
import path from 'path';
import { Cliente} from "@prisma/client";

@Controller('cliente')
export class ClienteController {

    constructor(private readonly clienteService: ClienteService){
    }
     
    @Get()
    async GetAllCliente(){
        return this.clienteService.getAllCliente();
    }

    @Get(':id')
    async GetClienteById(@Param('id') id: string){
        const clienteFound = await this.clienteService.getClienteByID(Number(id));
        if(!clienteFound) throw new NotFoundException('el cliente no existe')
            return clienteFound
    }

    @Post()
    async create(@Body() data: Cliente){
        return this.clienteService.createCliente(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            return await this.clienteService.deleteCliente(Number(id));

        }catch(error){
            throw new NotFoundException("el cliente no existe")
        }
    }

    @Put(':id')
    async updateCliente(@Param('id') id: string, @Body() data: Cliente) {
        try {
            return await this.clienteService.updateCliente(Number(id), data); 
        } catch (error) {
            throw new NotFoundException("el cliente no existe")
        }
    }


}
