import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
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
}
