import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class SubscriberprofessionalinfoManager extends BaseService {

    private subscriberprofessionalinfoUrl: string = `${environment.apiUrl}/subscriberprofessionalinfocontroller`

    allprofessionalinfo() {
        return this.getCallService(`${this.subscriberprofessionalinfoUrl}` + "/list");
    }
}