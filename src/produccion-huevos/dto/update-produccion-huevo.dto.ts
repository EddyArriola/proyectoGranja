import { PartialType } from '@nestjs/mapped-types';
import { CreateProduccionHuevoDto } from './create-produccion-huevo.dto';

export class UpdateProduccionHuevoDto extends PartialType(
  CreateProduccionHuevoDto,
) {}
