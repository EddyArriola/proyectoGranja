import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inventarios } from '../inventario.modelos';
import { promises } from 'dns';

@Injectable()
export class InventarioService {
    constructor(@InjectRepository(inventarios) private inventarioRepository: Repository<inventarios>){

    }

    async findAll(): Promise<inventarios>{
        return await this.inventarioRepository.findBy({status: true});
    }
    async create(InventarioID: number): Promise<inventarios>{
        return await this.inventarioRepository.findOneBy({id: InventarioID, status: true});
    }
}
