import { Request, Response, RequestHandler } from "express";
import Connection from "mysql/lib/Connection";
import { connect } from "../database";
import { Socials } from "../interfaces/Social";
import { Get, Route } from "tsoa";
import { Comprobante } from "../models/comprobante.schema";

export async function createComprobante(req: Request, res: Response) {
  const { IdAtleta, RutaArchivoComprobant } = req.body;
  const createSocial = Comprobante.create({
    IdAtleta: IdAtleta,
    RutaArchivoComprobant: RutaArchivoComprobant,
  });

  await createSocial
    .then((data) => {
      console.log(data.id);
      res.status(200).send({ data: "Created success", idCreated: data.id });
    })
    .catch((err) => {
      res.status(404).send({ message: err });
    });
}

export async function getComprobantes(req: Request, res: Response) {
  await Comprobante.findAll({
    where: {
      Inactive: false,
    },
  })
    .then((informacionatleta: any) => {
      res.status(200).send({ data: informacionatleta });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function getOneComprobante(req: Request, res: Response) {
  const IdComprobante = req.params.IdComprobante;
  console.log(req.params.IdAtleta);

  const OneComprobante = await Comprobante.findOne({
    where: {
      IdAtleta: IdComprobante,
    },
  })
    .then((OneComprobante: any) => {
      res.status(200).send({ data: OneComprobante });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function deleteComprobante(req: Request, res: Response) {
  const Id = req.params.IdComprobante;

  await Comprobante.update(
    {
      Inactive: true,
    },
    { where: { IdComprobante: Id } }
  )
    .then(() => {
      res.status(200).send({ data: "Deleted Comprobante de pago" });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function updateComprobante(req: Request, res: Response) {
  const Id = req.params.IdComprobante;
  console.log(Id);
  const { IdAtleta, RutaArchivoComprobant, Inactive } = req.body;

  await Comprobante.update(
    {
      IdAtleta: IdAtleta,
      RutaArchivoComprobant: RutaArchivoComprobant,
      Inactive: Inactive,
    },
    { where: { IdComprobante: Id } }
  )
    .then(() => {
      res.status(200).send({ data: "Updated Comprobante" });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
