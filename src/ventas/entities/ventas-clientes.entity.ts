import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { VentasHuevos } from './ventas-huevos.entity';
import { Clientes } from './clientes.entity';

@Entity('VentasClientes') // Nombre de la tabla en la base de datos
export class VentasClientes {
  @PrimaryGeneratedColumn()
  VentaClienteID: number;

  @ManyToOne(() => VentasHuevos)
  @JoinColumn({ name: 'VentaID' })
  venta: VentasHuevos;

  @ManyToOne(() => Clientes)
  @JoinColumn({ name: 'ClienteID' })
  cliente: Clientes;
}
