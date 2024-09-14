import { PrismaService } from 'src/prisma/prisma.service';
import { Cliente } from "@prisma/client";
export declare class ClienteService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCliente(): Promise<Cliente[]>;
    getClienteByID(ClienteID: number): Promise<Cliente>;
    createCliente(data: Cliente): Promise<Cliente>;
    updateCliente(ClienteID: number, data: Cliente): Promise<Cliente>;
    deleteCliente(ClienteID: number): Promise<Cliente>;
}
