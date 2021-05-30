export class Company {

    public companyCode: string;
    public companyName: string;
    public ceo: string;
    public turnover: number;
    public website: string;
    public exchange: string;

    constructor(code: string, name: string, ceo: string, turover: number,
        website:string, exchange: string) {
            this.companyCode = code;
            this.companyName = name;
            this.ceo = ceo;
            this.turnover = turover;
            this.website = website;
            this.exchange = exchange;
        }

}