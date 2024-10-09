import { Injectable } from '@nestjs/common';
import { prismaService } from 'src/prisma/prisma.service';
import {inventario} from "@prisma/client"

@Injectable()
export class InventarioService {
    constructor(private prisma: prismaService){

    }

    async getAllInventario(): Promise<inventario[]>{
        return this.prisma.inventario.findMany();
    }

    async getInventarioByID(InventarioID: number): Promise<inventario>{
        return this.prisma.inventario.findUnique({
            where:{
                InventarioID

            }
        })
    }

    async createInventario(data: inventario): Promise<inventario>{
        return this.prisma.inventario.create({
            data
        })
    }

    
    async updateInventario(InventarioID: number, data: inventario): Promise<inventario>{
        return this.prisma.inventario.update({
            where: {
                InventarioID
            }, data

        })
    }

    async deleteInventario(InventarioID: number): Promise<inventario> {
        return this.prisma.inventario.delete({
            where: {
                InventarioID
            }
        })
    }
}
 