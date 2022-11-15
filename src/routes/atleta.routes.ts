import { Router } from "express";
import { Get, Route } from "tsoa";

const router = Router();
import {
  getAtletas,
  createAtleta,
  getOneAtletas,
  deletedAtletas,
  updateAtletas,
} from "../controllers/atleta.controller";

router.route("/").get(getAtletas).post(createAtleta);

router
  .route("/:IdAtleta")
  .get(getOneAtletas)
  .delete(deletedAtletas)
  .put(updateAtletas);
export default router;
