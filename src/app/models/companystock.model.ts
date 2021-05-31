import { stringify } from "@angular/compiler/src/util";
import { CompanyModel } from "./company.model";
import { StockModel } from "./stock.model";

export class CompanyStockModel {

    public stock: StockModel;
    public company: CompanyModel;

    constructor(stock: StockModel, comp: CompanyModel) {
        this.stock = stock;
        this.company = comp;
    }
}