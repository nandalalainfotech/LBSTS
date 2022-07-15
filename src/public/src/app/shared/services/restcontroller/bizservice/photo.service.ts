import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Photo001wb } from "../entities/Photo001wb";


@Injectable()

export class PhotoManager extends BaseService {

    private photoUrl: string = `${environment.apiUrl}/photocontroller`

    allsub() {
        return this.getCallService(`${this.photoUrl}` + "/list");

    }

    savesub(photo001wb: Photo001wb) {
        
        return this.postCallService(`${this.photoUrl}` + "/create", {}, photo001wb);
    }

    updatesub(photo001wb: Photo001wb,id: any) {
        return this.putCallService(`${this.photoUrl}` + "/update/"+ id, {}, photo001wb);
    }
    updatesubss(photo001wb: Photo001wb,id: any) {
        return this.putCallService(`${this.photoUrl}` + "/update/"+ id, {}, photo001wb);
    }
    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.photoUrl}` + "/delete", data);
    }

}