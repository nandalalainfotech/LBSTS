import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Photo001wb } from "../entities/Photo001wb";


@Injectable()

export class SubscriptionmasterManager extends BaseService {

    private submasterUrl: string = `${environment.apiUrl}/subscriptionmastercontroller`

    allsubmaster() {
        return this.getCallService(`${this.submasterUrl}` + "/list");
    }

    // savesub(subcategory001mb: Subcategory001mb) {
    //     console.log("subcategory001mb",subcategory001mb);
    //     return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    // }

    updatesub(photo001wb: Photo001wb) {
        return this.putCallService(`${this.submasterUrl}` + "/update", {}, photo001wb);
    }

    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.submasterUrl}` + "/delete", data);
    }

}