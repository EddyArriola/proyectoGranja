import { Injectable } from '@nestjs/common';
import { CreateProduccionHuevoDto } from './dto/create-produccion-huevo.dto';
import { UpdateProduccionHuevoDto } from './dto/update-produccion-huevo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProduccionHuevo } from './entities/produccion-huevo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduccionHuevosService {
  constructor(
    @InjectRepository(ProduccionHuevo) // Injectar la entidad de base de datos.
    private readonly produccionHuevoRepository: Repository<ProduccionHuevo>, // Establece el tipo repositorio para acceder a las funcionalidades CRUD
  ) {}

  async create(
    createProduccionHuevoDto: CreateProduccionHuevoDto,
  ): Promise<ProduccionHuevo> {
    try {
      const produccionHuevo = this.produccionHuevoRepository.create(
        createProduccionHuevoDto,
      );
      return this.produccionHuevoRepository.save(produccionHuevo);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll(): Promise<ProduccionHuevo[]> {
    return this.produccionHuevoRepository.find();
  }

  async findOne(id: number) {
    return await this.produccionHuevoRepository.findOne({
      where: { ProduccionId: id },
    });
  }

  async update(
    id: number,
    updateProduccionHuevoDto: UpdateProduccionHuevoDto,
  ): Promise<ProduccionHuevo> {
    await this.produccionHuevoRepository.update(id, updateProduccionHuevoDto);
    return await this.produccionHuevoRepository.findOne({
      where: { ProduccionId: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.produccionHuevoRepository.delete(id);
  }
}
