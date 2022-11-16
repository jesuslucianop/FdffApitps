import { Router } from "express";

const router = Router();
import {
  getSocial,
  createSocial,
  getOneSocial,
  deleteSocial,
  updateSocial,
} from "../controllers/social.controller";

router.route("/").get(getSocial).post(createSocial);

router
  .route("/:socialId")
  .get(getOneSocial)
  .delete(deleteSocial)
  .put(updateSocial);
export default router;
