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
    `SELECT  infotleta.Nombres,
    infotleta.Apellidos,
    infotleta.Cedula,
   carnets.NumeroCarnet,carnets.FechaInscripcion 
   , atleta.Nacionalidad,atleta.CategoriaCompite,
   c.RutaArchivoComprobant    
   FROM Carnets carnets    
   INNER JOIN Atleta atleta   
   ON atleta.IdCarnet= carnets.IdCarnet    
   INNER JOIN InformacionAtleta infotleta     
   ON  infotleta.IdInformacionAtleta= atleta.IdInformacionAtleta    
   INNER JOIN Comprobantes c    
   ON c.IdAtleta= atleta.IdAtleta
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
