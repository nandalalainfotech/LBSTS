import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";

@Injectable()

export class LanguageManager extends BaseService {

    private languageUrl: string = `${environment.apiUrl}/languagecontroller`

    alllanguage() {
        return this.getCallService(`${this.languageUrl}` + "/list");
    }
}