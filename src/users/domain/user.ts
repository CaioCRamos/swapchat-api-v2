import { SecurityQuestion } from './value-objects/security-question';
import { Password } from './value-objects/password';
import { Account } from './account';

export class User {
    Id: string;
    Name: string;
    Phone: string;
    Password: Password;
    SecurityQuestion: SecurityQuestion;
    Accounts: Array<Account>
}