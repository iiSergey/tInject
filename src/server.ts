import "reflect-metadata";
import * as bodyParser from "body-parser";
import helmet = require("helmet");
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./constans/types";
import "./controllers/homeController";
import "./controllers/usersController";
import { UserService } from "./services/usersService";

const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserService);

const server = new InversifyExpressServer(container, null, {
  rootPath: "/api/v1"
});
server.setConfig(app => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(helmet());
});

const serverInstance = server.build();
serverInstance.listen(3000);
