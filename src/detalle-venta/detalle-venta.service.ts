import { Injectable } from '@nestjs/common';
import { DetalleVenta } from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetalleVentaService {
    
    constructor(private prisma: prismaService){
    }

    async getAllDetalleVenta(): Promise<DetalleVenta[]>{
        return this.prisma.detalleVenta.findMany();
    }

    async getDetalleVentaByID(DetalleID: number): Promise<DetalleVenta>{
        return this.prisma.detalleVenta.findUnique({
            where:{
                DetalleID
            }
        })
    }

    async createDetalleVenta(data: DetalleVenta): Promise<DetalleVenta>{
        return this.prisma.detalleVenta.create({
            data
        })
    }


    async updateDetalleVenta(DetalleID: number, data: DetalleVenta): Promise<DetalleVenta>{
        return this.prisma.detalleVenta.update({
            where: {
                DetalleID
            }, data
        })
    }

    async deleteDetalleVenta(DetalleID: number): Promise<DetalleVenta> {
        return this.prisma.detalleVenta.delete({
            where: {
                DetalleID
            }
        })
    }

}
