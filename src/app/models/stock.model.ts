export class StockModel {

    public companyCode: string;
    public price: number;
    public createdDate: string;

    constructor(companyCode: string, price: number, createdDate: string) {
        this.companyCode = companyCode;
        this.price = price;
        this.createdDate = createdDate;
    }
}