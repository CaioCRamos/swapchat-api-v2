import { injectable } from "inversify";
import { Password } from "../domain/value-objects/password";
import { SecurityQuestion } from "../domain/value-objects/security-question"; 
import { User } from '../domain/user';
import UserModel from './user.model';

export interface IUserRepository {
    getUsers(): Array<User>;
}

@injectable()
export class UserRepository implements IUserRepository {
    async getUsers(): Array<User> {
        const users = await UserModel.find({});
        
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