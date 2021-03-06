import {
  controller,
  httpGet
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../constans/types";
import { UserEntity, BaseService} from "../services/usersService";

@controller("/user")
export class UserController {
  constructor(@inject(TYPES.BaseService) private userService: BaseService<UserEntity>) {}

  @httpGet("/")
  public getData(): UserEntity {
    return this.userService.getData();
  }
}
