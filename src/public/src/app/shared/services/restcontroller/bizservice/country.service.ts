import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class CountryManager extends BaseService {

    private  countryUrl: string = `${environment.apiUrl}/countrycontroller`

    allcountry() {
        return this.getCallService(`${this.countryUrl}` + "/list");
    }
}