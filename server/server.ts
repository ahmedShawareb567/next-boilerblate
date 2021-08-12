import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import socialElements from "./socials";
import router from "./routes";

const consola = require("consola");

const startServer = (handle: any, port: any) => {
  // express
  const app = express();
  app.use(cors());
  app.disable("x-powered-by");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  passport.use(socialElements.google);
  app.use(passport.initialize());

  app.use("/auth", router);

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    consola.ready({
      message: `>> Ready on http://localhost:${port}`,
      badge: true,
    });
  });
};

export default startServer;
