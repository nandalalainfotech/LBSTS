import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Photo001wb } from "../entities/Photo001wb";
import { Video001wb } from "../entities/Video001wb";


@Injectable()

export class VideoManager extends BaseService {

    private videoUrl: string = `${environment.apiUrl}/videocontroller`

    allvideo() {
        return this.getCallService(`${this.videoUrl}` + "/list");
    }

    // savesub(subcategory001mb: Subcategory001mb) {
    //     console.log("subcategory001mb",subcategory001mb);
    //     return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    // }
    updatesubss(video001wb: Video001wb,id: any) {
        return this.putCallService(`${this.videoUrl}` + "/update/"+ id, {}, video001wb);
    }
    updatesub(video001wb: Video001wb,id: any) {
        return this.putCallService(`${this.videoUrl}` + "/update/" + id, {}, video001wb);
    }

    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.videoUrl}` + "/delete", data);
    }

}