import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "social",
  tableName: "socials",
})
export class social extends Model {
  @Column({
    field: "IdSocial",
    allowNull: false,
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Facebook!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Whatsapp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Instagram!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Twitter!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  Inactive!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt!: Date;

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}
