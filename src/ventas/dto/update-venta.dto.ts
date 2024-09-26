import { DetalleVenta } from "@prisma/client";
import { Clientes } from "../entities/clientes.entity";

export class UpdateVentaDto {
    FechaVenta?: Date;
    Cantidad?: number;
    PrecioVenta?: number;
    Clientes?: Clientes;
    Detalle?: DetalleVenta;
  }
  