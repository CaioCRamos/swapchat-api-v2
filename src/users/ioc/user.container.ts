import { ContainerModule, interfaces } from "inversify";
import { IUserRepository, UserRepository } from "../repository/user.repository";
import { IUserService, UserService } from "../services/user.service";
import { USER_TYPES } from "./user.types";

export class UserContainer {
    private readonly _container: ContainerModule;

    constructor() {
        this._container = new ContainerModule(
            (bind: interfaces.Bind) => {
                bind<IUserRepository>(USER_TYPES.IUserRepository).to(UserRepository);
                bind<IUserService>(USER_TYPES.IUserService).to(UserService);
            }
        );
    }

    get(): ContainerModule {
        return this._container;
    }
}