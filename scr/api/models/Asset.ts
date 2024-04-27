import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from 'typeorm';

// Verifique se você está usando `@Entity` corretamente:
// `@Entity()` é chamado como uma função se você não estiver passando nenhum argumento
@Entity()
export class Asset extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    nome: string;

    @Column({ type: 'varchar', length: 100 })
    categoria: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    custo_aquisicao: number;

    @Column({ type: 'date' })
    data_aquisicao: Date;

    @Column({ type: 'varchar', length: 200 })
    fornecedor: string;

    @Column({ type: 'text' })
    informacoes_garantia: string;

    @Column({ type: 'text' })
    notas: string;

    @Column({ type: 'varchar', length: 200 })
    numero_serie: string;

    @Column({ type: 'date' })
    proxima_manutencao: Date;

    @Column({ type: 'varchar', length: 100 })
    responsavel: string;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    valor_atual: number;
}
