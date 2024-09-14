import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'HuevosProduccion', schema: 'dbo' })
export class ProduccionHuevo {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  ProduccionId!: number;

  @Column({ type: 'int', nullable: true })
  GallinaID!: number;

  @Column({ type: 'date', nullable: true })
  FechaProduccion!: Date;

  @Column({ type: 'int', nullable: true })
  Cantidad!: number;

  @Column({ type: 'int', nullable: true })
  InventarioId!: number;
}
