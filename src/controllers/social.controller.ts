import { Request, Response, RequestHandler } from "express";

import { Socials } from "../interfaces/Social";
import { social } from "../models/social.schema";

export async function getSocial(req: Request, res: Response) {
  social
    .findAll({
      where: {
        Inactive: false,
      },
    })
    .then((social: any) => {
      res.status(200).send({ data: social });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
export async function createSocial(req: Request, res: Response) {
  const { Facebook, Whatsapp, Twitter, Instagram } = req.body;
  const createSocial = social.create({
    Facebook: Facebook,
    Whatsapp: Whatsapp,
    Twitter: Twitter,
    Instagram: Instagram,
    Created_at: new Date(),
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
export async function getOneSocial(req: Request, res: Response) {
  const IdSocial = req.params.socialId;
  console.log(req.params.socialId);
  const socialOne = social
    .findOne({
      where: {
        IdSocial: IdSocial,
      },
    })
    .then((socialOne: any) => {
      res.status(200).send({ data: socialOne });
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}

export async function deleteSocial(req: Request, res: Response) {
  const Id = req.params.socialId;
  social
    .update(
      {
        Inactive: true,
      },
      { where: { Id, IdSocial: Id } }
    )
    .then(() => {
      res.status(200).send({ deleted: true });
    })
    .catch((err: any) => {
      res.status(404).send({ deleted: false, message: err });
    });
}

export async function updateSocial(req: Request, res: Response) {
  const id = req.params.socialId;
  const { Whatsapp, Facebook, Instagram, Twitter } = req.body;
  social
    .update(
      {
        Whatsapp: Whatsapp,
        Facebook: Facebook,
        Instagram: Instagram,
        Twitter: Twitter,
        updatAt: new Date(),
      },
      { where: { id, IdSocial: id } }
    )
    .then(() => {
      res.status(204).send();
    })
    .catch((err: any) => {
      res.status(404).send({ message: err });
    });
}
