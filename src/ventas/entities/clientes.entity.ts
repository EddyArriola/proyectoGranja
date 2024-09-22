import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Clientes') // Nombre de la tabla en la base de datos
export class Clientes {
  @PrimaryGeneratedColumn()
  ClienteID: number;

  @Column({ type: 'varchar', length: 50 })
  Nombre: string;

  @Column({ type: 'varchar', length: 100 })
  Direccion: string;
}
