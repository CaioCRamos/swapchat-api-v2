import { injectable } from "inversify";
import { User } from "../domain/user";
import { Password } from "../domain/value-objects/password";
import { SecurityQuestion } from "../domain/value-objects/security-question";

export interface IUserRepository {
    getUsers(): Array<User>;
}

@injectable()
export class UserRepository implements IUserRepository {
    getUsers(): Array<User> {
        return [
            {
                Id: '123',
                Name: 'Caio Ramos',
                Phone: '13981725138',
                Password: new Password('12345'),
                SecurityQuestion: new SecurityQuestion('', ''),
                Accounts: []
            }
        ];
    }
}