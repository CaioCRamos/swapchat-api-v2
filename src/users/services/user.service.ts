import { User } from "../domain/user";
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

export class UserService implements IUserService {
    private readonly _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    getAll(): User[] {
        return this._userRepository.getUsers();
    }

    create(user: NewUser): number | null {
        return 1;
    }
}