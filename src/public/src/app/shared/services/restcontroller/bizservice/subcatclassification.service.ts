import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class SubcatclassificationManager extends BaseService {

    private subcatclassificationUrl: string = `${environment.apiUrl}/subcatclassificationcontroller`

    allclassification() {
        return this.getCallService(`${this.subcatclassificationUrl}` + "/list");
    }
}