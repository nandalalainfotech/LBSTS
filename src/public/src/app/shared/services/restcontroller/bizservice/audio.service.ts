import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Audio001wb } from "../entities/Audio001wb";
import { Photo001wb } from "../entities/Photo001wb";


@Injectable()

export class AudioManager extends BaseService {

    private audioUrl: string = `${environment.apiUrl}/audiocontroller`

    allaudio() {
        return this.getCallService(`${this.audioUrl}` + "/list");
    }

    // savesub(subcategory001mb: Subcategory001mb) {
    //     console.log("subcategory001mb",subcategory001mb);
    //     return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    // }
    updatesubss(audio001wb: Audio001wb,id: any) {
        return this.putCallService(`${this.audioUrl}` + "/update/"+ id, {}, audio001wb);
    }
    updatesub(audio001wb: Audio001wb,id: any) {
        return this.putCallService(`${this.audioUrl}` + "/update/" + id, {}, audio001wb);
    }

    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.audioUrl}` + "/delete", data);
    }

}