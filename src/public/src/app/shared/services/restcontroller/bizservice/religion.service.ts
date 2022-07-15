import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class ReligionManager extends BaseService {

    private religionUrl: string = `${environment.apiUrl}/religioncontroller`

    allreligion() {
        return this.getCallService(`${this.religionUrl}` + "/list");
    }
}