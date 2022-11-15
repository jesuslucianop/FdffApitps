import { Router } from "express";
import { Get, Route } from "tsoa";

const router = Router();
import {
  getinformacionatleta,
  createinformacionatleta,
  getOneinformacionatleta,
  deleteinformacionatleta,
  updateinformacionatleta,
} from "../controllers/InformacionAtlteta.controller";

router.route("/").get(getinformacionatleta).post(createinformacionatleta);

router
  .route("/:IdAtleta")
  .get(getOneinformacionatleta)
  .delete(deleteinformacionatleta)
  .put(updateinformacionatleta);
export default router;
