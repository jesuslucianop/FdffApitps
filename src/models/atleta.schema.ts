import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  modelName: "Atleta",
  tableName: "Atleta",
})
export class Atleta extends Model {
  @Column({
    field: "IdAtleta",
    allowNull: true,
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  IdCarnet!: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  IdInformacionAtleta!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Nacionalidad!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Estatura!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  GimnasioPracticante!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  NombreEntrenador!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  CategoriaCompite!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  PesoCorporal!: string;

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
