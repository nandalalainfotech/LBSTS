import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class SubcatcodeManager extends BaseService {

    private subcatcodeUrl: string = `${environment.apiUrl}/subcategorycontroller`

    allsubcatcode() {
        return this.getCallService(`${this.subcatcodeUrl}` + "/list");
    }
}