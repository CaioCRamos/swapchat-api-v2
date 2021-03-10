export class Email {
    private Address: string;

    public getAddress(): string {
        return this.Address;
    };

    constructor(address: string) {
        this.Address = address;
    }

    isValid(): boolean {
        return true;
    }
}