import { IsDate, IsNotEmpty, isNumber, IsNumber } from 'class-validator';
export class CreateProduccionHuevoDto {
  @IsNumber()
  @IsNotEmpty()
  GallinaID: number;
  @IsDate()
  FechaProduccion: Date;
  @IsNumber()
  Cantidad: number;
  @IsNumber()
  InventarioID: number;
  @IsNumber()
  HuevoID: number;
}
