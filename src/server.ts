import "reflect-metadata";
import * as bodyParser from "body-parser";
import helmet = require("helmet");
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./constans/types";
import "./controllers/homeController";
import "./controllers/usersController";
import {ContactEntity, ContactRepo, IRepo, UserEntity, UserRepo, BaseService} from "./services/usersService";

const container = new Container();

//container.bind<IRepo<UserEntity>>(TYPES.Repo).to(UserRepo);
container.bind<IRepo<ContactEntity>>(TYPES.Repo).to(ContactRepo);
//container.bind<BaseService<UserEntity>>(TYPES.BaseService).to(BaseService);
container.bind<BaseService<ContactEntity>>(TYPES.BaseService).to(BaseService);

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
