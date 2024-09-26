import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('InventarioHuevos') // Nombre de la tabla en la base de datos
export class InventarioHuevos {
  @PrimaryGeneratedColumn()
  InventarioID: number;  // Mapea con la columna InventarioID de la tabla

  @Column({ type: 'date' })
  FechaIngreso: Date;

  @Column({ type: 'date', nullable: true })
  FechaVenta: Date;

  @Column({ type: 'int' })
  CantidadIngreso: number;

  @Column({ type: 'int' })
  CantidadVenta: number;

  @Column({ type: 'int' })
  Existencias: number;
}
