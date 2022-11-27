import { Router } from "express";

const router = Router();

import { getAtletasInscritos } from "../controllers/Report.controller";

router.route("/").get(getAtletasInscritos);
/*
router
  .route("/:socialId")
  .get(getOneSocial)
  .delete(deleteSocial)
  .put(updateSocial);*/
export default router;
