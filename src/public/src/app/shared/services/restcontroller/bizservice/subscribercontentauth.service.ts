import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class SubscribercontentauthManager extends BaseService {

    private  subscribercontentauthUrl: string = `${environment.apiUrl}/subscribercontentauthcontroller`

    allsubscriberconten() {
        return this.getCallService(`${this.subscribercontentauthUrl}` + "/list");
    }
}