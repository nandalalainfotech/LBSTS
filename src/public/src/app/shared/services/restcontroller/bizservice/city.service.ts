import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class CityManager extends BaseService {

    private  cityUrl: string = `${environment.apiUrl}/citycontroller`

    allcity() {
        return this.getCallService(`${this.cityUrl}` + "/list");
    }
}