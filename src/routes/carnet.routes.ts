import { Router } from "express";

const router = Router();
import {
  getCarnets,
  createCarnet,
  getOneCarnet,
  deleteCarnet,
  updateCarnet,
} from "../controllers/carnet.controller";

router.route("/").get(getCarnets).post(createCarnet);

router
  .route("/:IdCarnet")
  .get(getOneCarnet)
  .delete(deleteCarnet)
  .put(updateCarnet);
export default router;
