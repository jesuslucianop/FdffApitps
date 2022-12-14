import express, { Application } from "express";
import morgan from "morgan";
import sequelizeConn from "./db/sequelize";
const cors = require("cors");

//Routes
import SocialRoutes from "./routes/Social.routes";
import informacionatletaRoutes from "./routes/InformacionAtleta.routes";
import AtletaRoute from "./routes/atleta.routes";
import CarnetRoute from "./routes/carnet.routes";
import Report from "./routes/Report.routes";

import ComprobanteRoute from "./routes/Comprobantes.routes";

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.setting();
    this.midlewares();
    this.routes();
  }
  setting() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }
  midlewares() {
    this.app.use(morgan("dev"));
    // this.app.use(express.json());
    this.app.use(cors());
    var bodyParser = require("body-parser");
    this.app.use(bodyParser.json({ limit: "50mb" }));

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
    this.app.use("/Socials", SocialRoutes);
    this.app.use("/informacionatleta", informacionatletaRoutes);
    this.app.use("/Atleta", AtletaRoute);
    this.app.use("/Comprobante", ComprobanteRoute);
    this.app.use("/Carnet", CarnetRoute);
    this.app.use("/Report", Report);
  }
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port ", this.app.get("port"));
  }
}
