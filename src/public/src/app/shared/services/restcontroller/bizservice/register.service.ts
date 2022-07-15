import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Login001mb } from "../entities/Login001mb";
import { Person001mb } from "../entities/Person001mb";
import { User001wb } from "../entities/users001wb";

@Injectable()

export class RegisterManager extends BaseService {

  private userUrl: string = `${environment.apiUrl}/userscontroller`


  alluser() {
    return this.getCallService(`${this.userUrl}` + "/list");
  }

  saveuser(user001wb: User001wb,login001mb: Login001mb,person001mb: Person001mb) {
    let data: any = {};
    data['user001wb'] = user001wb;
    data['person001mb'] = person001mb;
    data['login001mb'] = login001mb;

    console.log("data",data)
    return this.postCallService(`${this.userUrl}` + "/create", {}, data);
  }

  updateuser(user001wb: User001wb,person001mb: Person001mb,login001mb: Login001mb,personid:any,loginid:any,userid:any) {
    let data: any = {};
    data['user001wb'] = user001wb;
    data['login001mb'] = login001mb;
    data['person001mb'] = person001mb;
    data['personid'] = personid;
    data['loginid'] = loginid;
    data['userid'] = userid;
  
    console.log("data",data)
    return this.putCallService(`${this.userUrl}` + "/update" , {},data);
  }

  deleteuser(personid:any,loginid:any,userid:any) {
    let data: any = {};
    data['personid'] = personid;
    data['loginid'] = loginid;
    data['userid'] = userid;
    console.log("deletr",data)
    return this.deleteCallService(`${this.userUrl}` + "/delete", data);
  }
}