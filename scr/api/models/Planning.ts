import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from 'typeorm';

@Entity('planejamento')  // Mapeia a classe para a tabela 'planejamento'
export class Planning extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;  // Representa a coluna 'id', que é gerada automaticamente

    @Column('date')
    data_agendamento: Date;  // Representa a coluna 'data_agendamento'

    @Column('time')
    hora_agendamento: string;  // Representa a coluna 'hora_agendamento'

    @Column('varchar', { length: 100 })
    tipo_manutencao: string;  // Representa a coluna 'tipo_manutencao'

    @Column('varchar', { length: 50 })
    status: string;  // Representa a coluna 'status'

    @Column('varchar', { length: 100 })
    responsavel: string;  // Representa a coluna 'responsavel'

    @Column('text')
    detalhes: string;  // Representa a coluna 'detalhes'

    @Column('text')
    notas: string;  // Representa a coluna 'notas'

    @Column()
    ativo_relacionado_id: number;  // Representa a coluna 'ativo_relacionado_id'
}
