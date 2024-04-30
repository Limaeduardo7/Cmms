import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from 'typeorm';

@Entity('ordens_servicos')  // Mapeia a classe para a tabela 'ordens_servicos'
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;  // Representa a coluna 'id', que é gerada automaticamente

    @Column('text')
    descricao: string;  // Representa a coluna 'descricao'

    @Column('varchar', { length: 100 })
    tipo_manutencao: string;  // Representa a coluna 'tipo_manutencao'

    @Column('varchar', { length: 50 })
    status: string;  // Representa a coluna 'status'

    @Column('date')
    data_criacao: Date;  // Representa a coluna 'data_criacao'

    @Column('date')
    data_agendamento: Date;  // Representa a coluna 'data_agendamento'

    @Column('date', { nullable: true })
    data_conclusao: Date;  // Representa a coluna 'data_conclusao', pode ser nula

    @Column('varchar', { length: 50 })
    prioridade: string;  // Representa a coluna 'prioridade'

    @Column('varchar', { length: 100 })
    responsavel: string;  // Representa a coluna 'responsavel'

    @Column('numeric', { precision: 10, scale: 2 })
    custo_estimado: number;  // Representa a coluna 'custo_estimado'

    @Column('numeric', { precision: 10, scale: 2 })
    custo_real: number;  // Representa a coluna 'custo_real'

    @Column('text')
    notas: string;  // Representa a coluna 'notas'

    @Column('jsonb', { nullable: true })
    anexos: any;  // Representa a coluna 'anexos', pode ser nula

    @Column('jsonb', { nullable: true })
    historico: any;  // Representa a coluna 'historico', pode ser nula

    @Column()
    ativo_relacionado_id: number;  // Representa a coluna 'ativo_relacionado_id'
}
