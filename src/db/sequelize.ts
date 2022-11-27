import { Sequelize } from "sequelize-typescript";
const Sequelize2 = require("sequelize");
import {
  Association,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  Model,
  ModelDefined,
  Optional,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  ForeignKey,
} from "sequelize";
import { QueryTypes } from "sequelize";
import { social } from "../models/social.schema";
import { informacionatleta } from "../models/informacionatleta.schema";
import { Atleta } from "../models/atleta.schema";
import { Comprobante } from "../models/comprobante.schema";
import { Carnet } from "../models/carnet.schema";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "",
  port: 3306,
  username: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
  logging: false,

  models: [social, informacionatleta, Atleta, Comprobante, Carnet],
});

export default sequelize;
