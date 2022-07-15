import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class SubscriberpersonalinfoManager extends BaseService {

    private personalinfoUrl: string = `${environment.apiUrl}/subscriberpersonalinfocontroller`

    allpersonal() {
        return this.getCallService(`${this.personalinfoUrl}` + "/list");
    }
}