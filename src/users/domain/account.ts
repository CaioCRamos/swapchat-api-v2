import { Email } from './value-objects/email';

export class Account {
    Id: string;
    Name: string;
    Email: Email;
    Image: Buffer;
}