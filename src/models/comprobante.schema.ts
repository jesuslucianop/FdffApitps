import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "Comprobantes",
  tableName: "Comprobantes",
})
export class Comprobante extends Model {
  @Column({
    field: "IdComprobante",
    allowNull: false,
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  IdAtleta!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  RutaArchivoComprobant!: string;

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
