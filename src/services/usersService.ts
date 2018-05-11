import "reflect-metadata";
import {inject, injectable} from "inversify";
import TYPES from "../constans/types";

export interface IEntity {
  name: string;
}
@injectable()
export class UserEntity implements IEntity{
  public name: string;
  constructor(pname: string){this.name=pname;}
}
@injectable()
export class ContactEntity implements IEntity{
  public name: string;
  constructor(pname: string){this.name=pname;}
}

@injectable()
export class BaseService<T extends IEntity> {
  constructor(@inject(typeof (T)) private Repo:IRepo<T>) {} //TYPES.Repo
  public getData(): T {
    return this.Repo.getData();
}
}

export interface IRepo<T extends IEntity> {
  getData(): T ;
}

@injectable()
export abstract class BaseRepo<T extends IEntity> implements IRepo<T>{
  public abstract getData(): T ;
}
@injectable()
export class UserRepo extends BaseRepo<UserEntity>{
  //constructor(nameInstance:string) {super(nameInstance);}
  public getData(): UserEntity {
    return new UserEntity("name user UserEntity");
  }
}
@injectable()
export class ContactRepo extends BaseRepo<ContactEntity>{
  //constructor(nameInstance:string) {super(nameInstance);}
  public getData(): ContactEntity {
    return new ContactEntity("name user ContactEntity");
  }
}
