import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Role001wb } from "../entities/Role001wb";


@Injectable()

export class RoleManager extends BaseService {

  private roleUrl: string = `${environment.apiUrl}/rolecontroller`

    allrole() {
        return this.getCallService(`${this.roleUrl}`+"/list");
      }
      
      saverole(roles:Role001wb) {

        return this.postCallService(`${this.roleUrl}`+"/save",{}, roles);
      }

      updaterole(roles:Role001wb) {
        return this.putCallService(`${this.roleUrl}`+"/update", {}, roles);
      }

      deleterole(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.roleUrl}`+"/delete", data);
      }
}