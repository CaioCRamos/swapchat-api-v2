
import { inject, injectable } from "inversify";
import { User } from "../domain/user";
import { USER_TYPES } from "../ioc/user.types";
import { IUserRepository } from "../repository/user.repository";

export interface NewUser {
    Name: string;
    Phone: string;
    Password: string;
    SecurityQuestion: string;
    SecutiryAnswer: string;
}

export interface IUserService {
    create(user: NewUser): number | null;

    getAll(): Array<User>;
}

@injectable()
export class UserService implements IUserService {
    private readonly _userRepository: IUserRepository;

    constructor(@inject(USER_TYPES.IUserRepository) userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    getAll(): User[] {
        return this._userRepository.getUsers();
    }

    create(user: NewUser): number | null {
        return 1;
    }
}