import { Router } from "express";

const router = Router();
import {
  getComprobantes,
  createComprobante,
  getOneComprobante,
  deleteComprobante,
  updateComprobante,
} from "../controllers/Comprobante.controller";

router.route("/").get(getComprobantes).post(createComprobante);

router
  .route("/:IdComprobante")
  .get(getOneComprobante)
  .delete(deleteComprobante)
  .put(updateComprobante);
export default router;
