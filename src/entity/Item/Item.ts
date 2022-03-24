import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Generated, CreateDateColumn } from 'typeorm'

@Entity('items')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    @Generated('uuid')
    public uuid: string


    // PROPERTIES
    @Column({ type: 'varchar', nullable: false })
    public itemType: string

    @Column({ type: 'boolean', nullable: false })
    public played: boolean
}