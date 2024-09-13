import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { GranjasService } from './granjas.service';
import { CreateGranjaDto } from './dto/create-granja.dto';
import { UpdateGranjaDto } from './dto/update-granja.dto';

@Controller('granjas')
export class GranjasController {
  constructor(private readonly granjasService: GranjasService) {}

  @Get()
  async obtenerGranjas() {
    return this.granjasService.obtenerGranjas();
  }

  @Post()
  async crearGranja(@Body() createGranjaDto: CreateGranjaDto) {
    return this.granjasService.crearGranja(createGranjaDto);
  }

  @Put(':id')
  async actualizarGranja(@Param('id') id: number, @Body() updateGranjaDto: UpdateGranjaDto) {
    return this.granjasService.actualizarGranja(id, updateGranjaDto);
  }
}
