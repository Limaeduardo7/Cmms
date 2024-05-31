// src/models/Asset.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  categoria: string;

  @Column()
  status: string;

  @Column()
  localizacao: string;

  @Column()
  responsavel: string;

  @Column({ type: 'date' })
  data_aquisicao: string;

  @Column({ type: 'date' })
  proxima_manutencao: string;

  @Column({ type: 'decimal' })
  custo_aquisicao: number;

  @Column({ type: 'decimal' })
  valor_atual: number;

  @Column()
  numero_serie: string;
}
