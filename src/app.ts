import express, { Application } from "express";
import morgan from "morgan";
import { Get, Route } from "tsoa";
import sequelizeConn from "./db/sequelize";
import { Sequelize } from "sequelize";

//Routes
import indexRoutes from "./routes/index.routes";
import SocialRoutes from "./routes/Social.routes";
import informacionatletaRoutes from "./routes/InformacionAtleta.routes";
import AtletaRoute from "./routes/atleta.routes";
import CarnetRoute from "./routes/carnet.routes";

import ComprobanteRoute from "./routes/Comprobantes.routes";
import { swaggerDocs } from "./utils/swagger";
import swaggerUi from "swagger-ui-express";
@Route("socialclear")
@Get("/")
export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.setting();
    this.midlewares();
    this.routes();
    swaggerDocs(express(), this.port);
  }
  setting() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }
  midlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    sequelizeConn
      .authenticate()
      .then(() => {
        console.log("Connected to database sequelize");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
  routes() {
    this.app.use(indexRoutes);
    this.app.use("/Socials", SocialRoutes);
    this.app.use("/informacionatleta", informacionatletaRoutes);
    this.app.use("/Atleta", AtletaRoute);
    this.app.use("/Comprobante", ComprobanteRoute);
    this.app.use("/Carnet", CarnetRoute);
  }
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port ", this.app.get("port"));
  }
}
