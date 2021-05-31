import { SelectItem } from "primeng/api";
import { Stock } from "./stock.model";

export class SearchStock {

    companyList: SelectItem[];
    selectedCompany?: SelectItem;
    stockList: Stock[];
    selectedStartDate?: Date;
    selectedEndDate?: Date;
    errorMessage: string;
    min?: number;
    max?: number;
    average?: number;

    constructor() {
        this.companyList = new Array();
        this.stockList = new Array();
        this.errorMessage = '';
    }
}