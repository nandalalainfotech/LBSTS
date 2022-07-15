import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class CompanyManager extends BaseService {

    private regionalUrl: string = `${environment.apiUrl}/companydetailscontroller`

    allcompany() {
        return this.getCallService(`${this.regionalUrl}` + "/list");
    }
}