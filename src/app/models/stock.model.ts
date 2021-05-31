export class StockModel {

    public companyCode: string;
    public price: number;
    public date: string;

    constructor(companyCode: string, price: number, date: string) {
        this.companyCode = companyCode;
        this.price = price;
        this.date = date;
    }
}