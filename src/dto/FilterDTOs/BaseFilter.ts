export class BaseFilter {
    private _page?: number;
    private _pageSize?: number;
    private _orderBy: string;
    //orderBy: string;
    descendingDirection: boolean;
    Language?: number;
    CreatedBy?: number;

    get Page() {
        if (!this._page)
            return 1;
        return this._page;
    }

    set Page(value) {
        this._page = value;
    }

    get PageSize() {
        if (!this._pageSize)
            return 99999;
        return this._pageSize;
    }

    set PageSize(value) {
        this._pageSize = value;
    }

    get orderBy(): string {
        if (!this._orderBy)
            return 'Id';
        return this._orderBy;
    }

    set orderBy(value) {
        this._orderBy = value;
    }

    get GetIoTFilter() {
        let sort = this.descendingDirection ? "ASC" : "DESC";;
        return `&pageIndex=${this.Page}&pageSize=${this.PageSize}&orderBy=${this.orderBy}&sortDirection=${sort}`;
    }
}