import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class RegionalManager extends BaseService {

    private regionalUrl: string = `${environment.apiUrl}/regionaldetailscontroller`

    allregional() {
        return this.getCallService(`${this.regionalUrl}` + "/list");
    }
}