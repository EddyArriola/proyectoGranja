import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventarioHuevos } from './inventario-huevos.entity';
import {DetalleVenta} from './Detalle.entity'
import { Clientes } from './clientes.entity';

@Entity({name: 'VentasHuevos', schema: 'dbo'} ) // Nombre de la tabla en tu base de datos
export class VentasHuevos {
  @PrimaryGeneratedColumn()
  VentaID: number;  // Mapea con la columna VentaID de la tabla

  @Column({ type: 'date' })
  FechaVenta: Date;

  @Column({ type: 'int' })
  Cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  PrecioVenta: number;

  @ManyToOne(() => Clientes)
  @JoinColumn({ name: 'ClienteID' })  // Relaciona esta tabla con InventarioHuevos
  Clientes: Clientes;

  @ManyToOne(() => DetalleVenta)
  @JoinColumn({ name: 'DetalleID' })  // Relaciona esta tabla con InventarioHuevos
  DetalleVenta: DetalleVenta;
}