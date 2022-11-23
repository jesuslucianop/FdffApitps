import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "carnet",
  tableName: "Carnets",
})
export class Carnet extends Model {
  @Column({
    field: "IdCarnet",
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
  NumeroCarnet!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  FechaInscripcion!: Date;

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
