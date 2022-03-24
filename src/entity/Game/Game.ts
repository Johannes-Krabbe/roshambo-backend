import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Generated, CreateDateColumn } from 'typeorm'

@Entity('games')
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    @Generated('uuid')
    public uuid: string


    // PROPERTIES
    @Column({ type: 'boolean', nullable: false })
    public player1: boolean

    @Column({ type: 'boolean', nullable: false })
    public player2: boolean

}