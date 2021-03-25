import { User } from "../domain/user";
import { IUserModel } from "./user.model";

export class UserMap {
    static ToDomain(model: IUserModel): User {
        return null;
    }

    static ToModel(user: User): IUserModel {
        return null;
    }

    
}