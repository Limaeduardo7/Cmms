import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from 'typeorm';

@Entity('categorias')  // Mapeia a classe para a tabela 'categorias'
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;  // Representa a coluna 'id', que é gerada automaticamente

    @Column({ type: 'varchar', length: 100 })
    nome: string;  // Representa a coluna 'nome'

    @Column({ type: 'text' })
    descricao: string;  // Representa a coluna 'descricao'

    @Column({ type: 'boolean' })
    ativo: boolean;  // Representa a coluna 'ativo'
}
