import { Request, Response, RequestHandler } from "express";
import { Socials } from "../interfaces/Social";
import { informacionatleta } from "../models/informacionatleta.schema";

export async function createinformacionatleta(req: Request, res: Response) {
  const {
    Nombres,
    Apellidos,
    Cedula,
    Apodo,
    Telefono,
    Direccion,
    Email,
    Ciudad,
    IdAtleta,
  } = req.body;
  const createSocial = informacionatleta.create({
    IdAtleta: IdAtleta,
    Nombres: Nombres,
    Apellidos: Apellidos,
    Cedula: Cedula,
    Apodo: Apodo,
    Telefono: Telefono,
    Direccion: Direccion,
    Email: Email,
    Ciudad: Ciudad,
  });

  createSocial
    .then((data) => {
      console.log(data.id);
      res.status(200).send({ created: true, idCreated: data.id });
    })
    .catch((err) => {
      res.status(404).send({ created: false, message: err });
    });
}

export async function getinformacionatleta(req: Request, res: Response) {
  informacionatleta
    .findAll({
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

export async function getOneinformacionatleta(req: Request, res: Response) {
  const IdAtleta = req.params.IdAtleta;
  console.log(req.params.IdAtleta);

  const informacionatletaOne = informacionatleta
    .findOne({
      where: {
        IdAtleta: IdAtleta,
      },
    })
    .then((informacionatletaOne: any) => {
      res.status(200).send({ data: informacionatletaOne });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function deleteinformacionatleta(req: Request, res: Response) {
  const Id = req.params.IdAtleta;

  await informacionatleta
    .update(
      {
        Inactive: true,
      },
      { where: { IdInformacionAtleta: Id } }
    )
    .then(() => {
      res.status(200).send({ data: "Deleted Informacion Atleta" });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function updateinformacionatleta(req: Request, res: Response) {
  const Id = req.params.IdAtleta;
  console.log(Id);
  const {
    Nombres,
    Apellidos,
    Cedula,
    Apodo,
    Telefono,
    Direccion,
    Email,
    Ciudad,
    IdAtleta,
    Inactive,
  } = req.body;

  informacionatleta
    .update(
      {
        IdAtleta: IdAtleta,
        Nombres: Nombres,
        Apellidos: Apellidos,
        Cedula: Cedula,
        Apodo: Apodo,
        Telefono: Telefono,
        Direccion: Direccion,
        Email: Email,
        Ciudad: Ciudad,
        Inactive: Inactive,
      },
      { where: { IdInformacionAtleta: Id } }
    )
    .then(() => {
      res.status(204).send();
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
