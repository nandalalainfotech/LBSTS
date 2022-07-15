import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Subcategory001mb } from "../entities/Subcategory001mb";

@Injectable()

export class CategoryManager extends BaseService {

    private catUrl: string = `${environment.apiUrl}/categorydetailcontroller`

    allcatg() {
        return this.getCallService(`${this.catUrl}` + "/list");
    }

    // savesub(subcategory001mb: Subcategory001mb) {
    //     console.log("subcategory001mb",subcategory001mb);
    //     return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    // }

    updatecatg(subcategory001mb: Subcategory001mb) {
        return this.putCallService(`${this.catUrl}` + "/update", {}, subcategory001mb);
    }

    deletecatg(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.catUrl}` + "/delete", data);
    }

}