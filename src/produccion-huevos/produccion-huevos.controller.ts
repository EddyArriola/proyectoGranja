import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProduccionHuevosService } from './produccion-huevos.service';
import { CreateProduccionHuevoDto } from './dto/create-produccion-huevo.dto';
import { UpdateProduccionHuevoDto } from './dto/update-produccion-huevo.dto';

@Controller('produccion-huevos')
export class ProduccionHuevosController {
  constructor(
    private readonly produccionHuevosService: ProduccionHuevosService,
  ) {}

  @Post('/crear')
  create(@Body() createProduccionHuevoDto: CreateProduccionHuevoDto) {
    return this.produccionHuevosService.create(createProduccionHuevoDto);
  }

  @Get('/obtener-todo')
  findAll() {
    return this.produccionHuevosService.findAll();
  }

  @Get('/buscar-por-id/:id')
  findOne(@Param('id') id: string) {
    return this.produccionHuevosService.findOne(+id);
  }

  @Patch('/actualizar/:id')
  update(
    @Param('id') id: string,
    @Body() updateProduccionHuevoDto: UpdateProduccionHuevoDto,
  ) {
    return this.produccionHuevosService.update(+id, updateProduccionHuevoDto);
  }

  @Delete('/eliminar/:id')
  remove(@Param('id') id: string) {
    return this.produccionHuevosService.remove(+id);
  }
}
