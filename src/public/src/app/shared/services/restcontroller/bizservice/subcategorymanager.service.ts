import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Subcategory001mb } from "../entities/Subcategory001mb";

@Injectable()

export class SubCategoryManager extends BaseService {

    private subcatUrl: string = `${environment.apiUrl}/subcategorycontroller`

    allsub() {
        return this.getCallService(`${this.subcatUrl}` + "/list");
    }

    savesub(subcategory001mb: Subcategory001mb) {
        console.log("subcategory001mb",subcategory001mb);
        return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    }

    updatesub(subcategory001mb: Subcategory001mb) {
        return this.putCallService(`${this.subcatUrl}` + "/update", {}, subcategory001mb);
    }

    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.subcatUrl}` + "/delete", data);
    }

}