import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthManager } from '../services/restcontroller/bizservice/auth-manager.service';
import { VideoManager } from '../services/restcontroller/bizservice/video.service';
import { Video001wb } from '../services/restcontroller/entities/Video001wb';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-videopopup',
  templateUrl: './videopopup.component.html',
  styleUrls: ['./videopopup.component.css']
})
export class VideopopupComponent implements OnInit {

  @Input() title: string = '';
  details: any;
  @Input() sources: any;
  hexToRgb: any;
  video: Video001wb[] = [];
  rgbToHex: any;
  @HostBinding('style.--color_l1') colorthemes_1: any;
  @HostBinding('style.--color_l2') colorthemes_2: any;
  @HostBinding('style.--color_l3') colorthemes_3: any;
  @HostBinding('style.--color_l4') colorthemes_4: any;

  constructor(
    public activeModal: NgbActiveModal,
    private authManager: AuthManager, private videoManager: VideoManager,
  ) { }

  ngOnInit(): void {
    console.log("this.details", this.details)
    console.log("this.source", this.sources)
    this.authManager.currentUserSubject.subscribe((object: any) => {
      let rgb = Utils.hexToRgb(object.theme);

      this.colorthemes_1 = Utils.rgbToHex(rgb, -0.3);

      this.colorthemes_2 = Utils.rgbToHex(rgb, 0.1);

      this.colorthemes_3 = Utils.rgbToHex(rgb, 0.5);

      this.colorthemes_4 = Utils.rgbToHex(rgb, 0.8);
    });
  }

  onAcceptClick() {
    if (this.details._id) {
      let video001wb = new Video001wb();
      video001wb.flag = true;
      this.videoManager.updatesub(video001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }
  onCloseClick() {
    if (this.details._id) {
      let video001wb = new Video001wb();
      video001wb.flag = false;
      this.videoManager.updatesubss(video001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }


}
