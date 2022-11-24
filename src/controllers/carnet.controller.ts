import { Request, Response, RequestHandler } from "express";
import { Socials } from "../interfaces/Social";
import { Carnet } from "../models/carnet.schema";

export async function createCarnet(req: Request, res: Response) {
  const { NumeroCarnet, FechaInscripcion } = req.body;
  const idUltimoCarnet: number = await Carnet.max("NumeroCarnet");
  //Aqui se hace la logica de que si no existe en la base de datos el carnet 2001 que es que nos dieron para partir
  //Lo agregamos y si existe le suma uno
  const idInsertar = idUltimoCarnet < 2001 ? 2001 : 2001 + 1;
  const createCarnet = await Carnet.create({
    NumeroCarnet: idInsertar,
    FechaInscripcion: FechaInscripcion,
  })
    .then((data) => {
      console.log(data.id);
      res.status(200).send({ created: true, idCreated: data.id });
    })
    .catch((err) => {
      res.status(404).send({ created: false, message: err });
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
      res.status(200).send({ deleted: true });
    })
    .catch((err: any) => {
      res.status(404).send({ deleted: false, message: err });
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
      res.status(204).send();
    })
    .catch((err: any) => {
      res.status(404).send({ updated: false, message: err });
    });
}
