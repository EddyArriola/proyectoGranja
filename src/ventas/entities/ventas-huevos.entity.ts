import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventarioHuevos } from './inventario-huevos.entity';

@Entity('VentasHuevos') // Nombre de la tabla en tu base de datos
export class VentasHuevos {
  @PrimaryGeneratedColumn()
  VentaID: number;  // Mapea con la columna VentaID de la tabla

  @Column({ type: 'date' })
  FechaVenta: Date;

  @Column({ type: 'int' })
  Cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  PrecioVenta: number;

  @ManyToOne(() => InventarioHuevos)
  @JoinColumn({ name: 'InventarioID' })  // Relaciona esta tabla con InventarioHuevos
  inventario: InventarioHuevos;
}
