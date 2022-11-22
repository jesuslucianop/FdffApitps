import { Sequelize } from "sequelize-typescript";
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
  host: "143.244.157.164",
  port:3306,
  username: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
  logging: false,
  models: [social, informacionatleta, Atleta, Comprobante, Carnet],
});

export default sequelize;
