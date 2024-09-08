import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class inventarios{
    @PrimaryColumn()
    InventarioID: number;
    FechaIngreso: Date;
    FechaVenta: Date;
    CantidadIngreso: number;
    CantidadVenta: number;
	Existencias: number;

}

