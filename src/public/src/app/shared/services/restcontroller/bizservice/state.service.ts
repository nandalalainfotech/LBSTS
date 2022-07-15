import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class StateManager extends BaseService {

    private  stateUrl: string = `${environment.apiUrl}/statecontroller`

    allstate() {
        return this.getCallService(`${this.stateUrl}` + "/list");
    }
}