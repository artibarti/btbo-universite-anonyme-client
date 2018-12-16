export class InviteCode {

    id: string;
    code: string;
    validUntil: string;
    maxCopy: String;

    constructor() {
        this.id = '';
        this.code = '';
        this.validUntil = '';
        this.maxCopy = '';
    }
}
