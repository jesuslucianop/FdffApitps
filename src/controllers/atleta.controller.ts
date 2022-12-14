import { Request, Response, RequestHandler } from "express";
import { Atleta } from "../models/atleta.schema";

export async function createAtleta(req: Request, res: Response) {
  const {
    Nacionalidad,
    Estatura,
    GimnasioPracticante,
    NombreEntrenador,
    CategoriaCompite,
    PesoCorporal,
    IdCarnet,
    IdInformacionAtleta,
  } = req.body;
  const createAtleta = await Atleta.create({
    Nacionalidad: Nacionalidad,
    Estatura: Estatura,
    GimnasioPracticante: GimnasioPracticante,
    NombreEntrenador: NombreEntrenador,
    CategoriaCompite: CategoriaCompite,
    PesoCorporal: PesoCorporal,
    IdCarnet: IdCarnet,
    IdInformacionAtleta
  })
    .then((data) => {
      console.log(data.id);
      res.status(200).send({ created: true, idCreated: data.id });
    })
    .catch((err) => {
      res.status(404).send({ created: false, message: err });
    });
}

export async function getAtletas(req: Request, res: Response) {
  const Atletas = await Atleta.findAll({
    where: {
      Inactive: false,
    },
  })
    .then((Atletas: any) => {
      res.status(200).send({ data: Atletas });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function getOneAtletas(req: Request, res: Response) {
  const IdAtleta = req.params.IdAtleta;
  console.log(req.params.IdAtleta);

  const AtletasOne = Atleta.findOne({
    where: {
      IdAtleta: IdAtleta,
    },
  })
    .then((AtletasOne: any) => {
      res.status(200).send({ data: AtletasOne });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function deletedAtletas(req: Request, res: Response) {
  const Id = req.params.IdAtleta;

  await Atleta.update(
    {
      Inactive: true,
    },
    { where: { IdAtleta: Id } }
  )
    .then(() => {
      res.status(200).send({ deleted: true });
    })
    .catch((err: any) => {
      res.status(404).send({ deleted: false, message: err });
    });
}

export async function updateAtletas(req: Request, res: Response) {
  const Id = req.params.IdAtleta;
  console.log(Id);
  const {
    Nacionalidad,
    Estatura,
    GimnasioPracticante,
    NombreEntrenador,
    CategoriaCompite,
    PesoCorporal,
    IdCarnet,
  } = req.body;
  await Atleta.update(
    {
      Nacionalidad: Nacionalidad,
      Estatura: Estatura,
      GimnasioPracticante: GimnasioPracticante,
      NombreEntrenador: NombreEntrenador,
      CategoriaCompite: CategoriaCompite,
      PesoCorporal: PesoCorporal,
      IdCarnet: IdCarnet,
    },
    { where: { IdAtleta: Id } }
  )
    .then(() => {
      res.status(204);
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
