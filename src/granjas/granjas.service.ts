import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGranjaDto } from './dto/create-granja.dto';
import { UpdateGranjaDto } from './dto/update-granja.dto';

@Injectable()
export class GranjasService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerGranjas() {
    return this.prisma.granjas.findMany();
  }

  async crearGranja(createGranjaDto: CreateGranjaDto) {
    return this.prisma.granjas.create({ data: createGranjaDto });
  }

  async actualizarGranja(id: number, updateGranjaDto: UpdateGranjaDto) {
    return this.prisma.granjas.update({
      where: { GranjaID: id },
      data: updateGranjaDto,
    });
  }
}
