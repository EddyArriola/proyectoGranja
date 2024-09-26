import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventarioHuevos } from './inventario-huevos.entity';

@Entity('DetalleVenta') // Nombre de la tabla en tu base de datos
export class DetalleVenta{
  @PrimaryGeneratedColumn()
  DetalleID: number;  // Mapea con la columna VentaID de la tabla

  @Column({ type: 'int' })
  HuevoID: Date;

  @Column({ type: 'int' })
  cantidad: number;


}
