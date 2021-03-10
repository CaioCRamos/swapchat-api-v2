export class Password {
    private Value: string;

    getValue(): string {
        return this.Value;
    }

    constructor(value: string) {
        this.Value = value;
    }

    public isValid() : boolean {
        return true;
    }
}