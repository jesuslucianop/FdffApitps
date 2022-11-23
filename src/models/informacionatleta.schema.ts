import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "informacionatleta",
  tableName: "InformacionAtleta",
})
export class informacionatleta extends Model {
  @Column({
    field: "IdInformacionAtleta",
    allowNull: true,
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Nombres!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Apellidos!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Cedula!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Apodo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Telefono!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  Direccion!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Ciudad!: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  IdSocial!: number;

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
