import { Component, HostBinding } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Utils } from '../../utils/utils';
import { environment } from 'src/environments/environment';
import { AuthManager } from '../restcontroller/bizservice/auth-manager.service';
import * as FileSaver from 'file-saver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditComponent } from '../../audit/audit.component';
import { PopupComponent } from '../../popup/popup.component';
import { ImagepopupComponent } from '../../imagepopup/imagepopup.component';
import { AudiopopupComponent } from '../../audiopopup/audiopopup.component';

@Component({
    selector: 'app-iconaudio-renderer',
    templateUrl: './iconaudio-renderer-component.html',
    styleUrls: ['./iconaudio-renderer-component.css'],

})
export class IconAudioRendererComponent implements ICellRendererAngularComp {

    params: any;
    label: string = "";
    toggle: boolean = false;
    public downloadUrl: string = `${environment.apiUrl}/audiocontroller/show/`;

    hexToRgb: any;
    rgbToHex: any;
    @HostBinding('style.--color_l1') colorthemes_1: any;
    @HostBinding('style.--color_l2') colorthemes_2: any;
    @HostBinding('style.--color_l3') colorthemes_3: any;
    @HostBinding('style.--color_l4') colorthemes_4: any;
    constructor(private authManager: AuthManager, private modalService: NgbModal) { }


    agInit(params: any): void {
        this.authManager.currentUserSubject.subscribe((object: any) => {
            let rgb = Utils.hexToRgb(object.theme);
            this.colorthemes_1 = Utils.rgbToHex(rgb, -0.3);

            this.colorthemes_2 = Utils.rgbToHex(rgb, 0.1);

            this.colorthemes_3 = Utils.rgbToHex(rgb, 0.5);

            this.colorthemes_4 = Utils.rgbToHex(rgb, 0.8);
        });
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params?: any): boolean {
        return true;
    }

    onClick($event: any) {
        if (this.params.onClick instanceof Function) {
            const params = {
                event: $event,
                rowData: this.params.node.data
            }
            this.params.onClick(this.params);
        }
    }
    changeType(num: any) {
        this.toggle = !this.toggle;
    }

    onPopupButtonClick(params: any) {
        const modalRef = this.modalService.open(AudiopopupComponent,{backdrop : 'static'});
        modalRef.componentInstance.title = "Audio";
        modalRef.componentInstance.details = params.data;
        modalRef.componentInstance.sources = this.downloadUrl + this.params.data.filename;
}
}
