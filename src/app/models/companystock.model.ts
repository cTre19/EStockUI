import { stringify } from "@angular/compiler/src/util";
import { Company } from "./company.model";
import { Stock } from "./stock.model";

export class CompanyStock {

    public stock: Stock;
    public company: Company;

    constructor(stock: Stock, comp: Company) {
        this.stock = stock;
        this.company = comp;
    }
}