import {
  controller,
  httpGet
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../constans/types";
import {BaseService, ContactEntity} from "../services/usersService";

@controller("/contact")
export class UserController {
  constructor(@inject(TYPES.BaseService) private userService: BaseService<ContactEntity>) {}

  @httpGet("/")
  public getData(): ContactEntity {
    return this.userService.getData();
  }
}
