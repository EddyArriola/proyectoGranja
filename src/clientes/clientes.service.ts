import { Injectable } from '@nestjs/common';
import { DtoClientes, UpdateDto } from 'src/dto/clientes.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {Cliente} from "@prisma/client"
import { promises } from 'dns';

@Injectable()
export class ClienteService {
    constructor(private prisma: PrismaService){

    }

    async getAllCliente(): Promise<Cliente[]>{
        return this.prisma.cliente.findMany();
    }

    async getClienteByID(ClienteID: number): Promise<Cliente>{
        return this.prisma.cliente.findUnique({
            where:{
                ClienteID

            }
        })
    }

    async createCliente(data: Cliente): Promise<Cliente>{
        return this.prisma.cliente.create({
            data
        })
    }

    
    async updateCliente(ClienteID: number, data: Cliente): Promise<Cliente>{
        return this.prisma.cliente.update({
            where: {
                ClienteID
            }, data

        })
    }

    async deleteCliente(ClienteID: number): Promise<Cliente> {
        return this.prisma.cliente.delete({
            where: {
                ClienteID
            }
        })
    }
}
 