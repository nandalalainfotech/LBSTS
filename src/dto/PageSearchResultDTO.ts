export class PageSearchResultDTO<T>{
    NumberOfRecords: number;
    Collection: T[];

    constructor(){
        this.NumberOfRecords = 0;
        this.Collection = [];
    }
}