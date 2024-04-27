import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from 'typeorm';

@Entity('responsaveis')  // Mapeia a classe para a tabela 'responsaveis'
export class Responsible extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;  // Representa a coluna 'id', que é gerada automaticamente

    @Column('varchar', { length: 20 })
    telefone: string;  // Representa a coluna 'telefone'

    @Column('boolean')
    ativo: boolean;  // Representa a coluna 'ativo'

    @Column('varchar', { length: 100 })
    departamento: string;  // Representa a coluna 'departamento'

    @Column('varchar', { length: 100 })
    nome: string;  // Representa a coluna 'nome'

    @Column('varchar', { length: 100 })
    cargo: string;  // Representa a coluna 'cargo'

    @Column('varchar', { length: 254 })
    email: string;  // Representa a coluna 'email'
}
