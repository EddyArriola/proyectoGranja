import { DetalleVenta } from "@prisma/client";
import { Clientes } from "../entities/clientes.entity";

export class CreateVentaDto {
    FechaVenta: Date;
    Cantidad: number;
    PrecioVenta: number;
    ClienteID: Clientes;
    DetalleVenta: DetalleVenta;
  }
  