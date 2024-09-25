import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentasHuevos } from './entities/ventas-huevos.entity';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(VentasHuevos)
    private ventasRepository: Repository<VentasHuevos>,
  ) {}

  // Crear una nueva venta
  async create(createVentaDto: CreateVentaDto): Promise<VentasHuevos> {
    const nuevaVenta = this.ventasRepository.create(createVentaDto);
    return this.ventasRepository.save(nuevaVenta);
  }

  // Obtener todas las ventas
  async findAll(): Promise<VentasHuevos[]> {
    return this.ventasRepository.find();
  }

  // Obtener una venta por su ID
  async findOne(id: number): Promise<VentasHuevos> {
    return this.ventasRepository.findOne({ where: { VentaID: id } });
  }

  // Actualizar una venta
  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<VentasHuevos> {
    await this.ventasRepository.update(id, updateVentaDto);
    return this.findOne(id);
  }

  // Eliminar una venta
  async remove(id: number): Promise<void> {
    await this.ventasRepository.delete(id);
  }
}
