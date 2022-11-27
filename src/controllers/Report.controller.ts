import { Request, Response, RequestHandler } from "express";

import { Socials } from "../interfaces/Social";
import { Carnet } from "../models/carnet.schema";
import { Atleta } from "../models/atleta.schema";
import { Comprobante } from "../models/comprobante.schema";
import { informacionatleta } from "../models/informacionatleta.schema";
import { sendEmail } from "../utils/SendgridHelper";
import SequelizeConn from "../db/sequelize";
import Sequelize from "sequelize";

export async function getAtletasInscritos(req: Request, res: Response) {
  await SequelizeConn.query(
    `SELECT informacionatleta.Nombres, informacionatleta.Apellidos,
    informacionatleta.Cedula,carnets.NumeroCarnet,carnets.FechaInscripcion
    , atleta.Nacionalidad,atleta.CategoriaCompite, comprobantes.RutaArchivoComprobant
    FROM carnets carnets
    INNER JOIN atleta atleta 
    ON atleta.IdCarnet= carnets.IdCarnet
    INNER JOIN informacionatleta informacionatleta 
    ON informacionatleta.IdInformacionAtleta= atleta.IdInformacionAtleta
    INNER JOIN comprobantes comprobantes 
    ON comprobantes.IdAtleta= atleta.IdAtleta
    `,
    { type: Sequelize.QueryTypes.SELECT }
  )
    .then((informacionatletaOne: any) => {
      res.status(200).send({ data: informacionatletaOne });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
