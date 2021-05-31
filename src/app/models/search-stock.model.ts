import { SelectItem } from "primeng/api";
import { StatisticsModel } from "./statistics-model";
import { StockModel } from "./stock.model";

export class SearchStockModel {

    companyList: SelectItem[];
    selectedCompany?: SelectItem;
    stockList: StockModel[];
    selectedStartDate?: Date;
    selectedEndDate?: Date;
    errorMessage: string;
    stats: StatisticsModel;
    hasSearched: boolean;

    constructor() {
        this.companyList = new Array();
        this.stockList = new Array();
        this.errorMessage = '';
        this.hasSearched = false;
        this.stats = new StatisticsModel();
    }
}