import { Request, Response, RequestHandler } from "express";
import Connection from "mysql/lib/Connection";
import { connect } from "../database";
import { Socials } from "../interfaces/Social";
import { Get, Route } from "tsoa";
import { Carnet } from "../models/carnet.schema";

export async function createCarnet(req: Request, res: Response) {
  const { NumeroCarnet, FechaInscripcion } = req.body;
  const createCarnet = await Carnet.create({
    NumeroCarnet: NumeroCarnet,
    FechaInscripcion: FechaInscripcion,
  })
    .then((data) => {
      console.log(data.id);
      res.status(200).send({ data: "Created success", idCreated: data.id });
    })
    .catch((err) => {
      res.status(404).send({ message: err });
    });
}

export async function getCarnets(req: Request, res: Response) {
  const carnetsc = await Carnet.findAll({
    where: {
      Inactive: false,
    },
  })
    .then((carnetsc: any) => {
      res.status(200).send({ data: carnetsc });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function getOneCarnet(req: Request, res: Response) {
  const IdCarnet = req.params.IdCarnet;
  console.log(req.params.IdAtleta);

  const OneCarnet = await Carnet.findOne({
    where: {
      IdCarnet: IdCarnet,
    },
  })
    .then((OneCarnet: any) => {
      res.status(200).send({ data: OneCarnet });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function deleteCarnet(req: Request, res: Response) {
  const Id = req.params.IdCarnet;

  await Carnet.update(
    {
      Inactive: true,
    },
    { where: { IdCarnet: Id } }
  )
    .then(() => {
      res.status(200).send({ data: "Deleted Carnet" });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function updateCarnet(req: Request, res: Response) {
  const Id = req.params.IdCarnet;
  console.log(Id);
  const { NumeroCarnet, FechaInscripcion, Inactive } = req.body;

  await Carnet.update(
    {
      NumeroCarnet: NumeroCarnet,
      FechaInscripcion: FechaInscripcion,
      Inactive: Inactive,
    },
    { where: { IdCarnet: Id } }
  )
    .then(() => {
      res.status(200).send({ data: "Updated carnet" });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}