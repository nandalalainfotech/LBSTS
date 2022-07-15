import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";


@Injectable()

export class LoginManager extends BaseService {

  private userUrl: string = `${environment.apiUrl}/logincontroller`


  alluser() {
    return this.getCallService(`${this.userUrl}` + "/list");
  }
}