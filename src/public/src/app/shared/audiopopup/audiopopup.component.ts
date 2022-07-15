import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AudioManager } from '../services/restcontroller/bizservice/audio.service';
import { AuthManager } from '../services/restcontroller/bizservice/auth-manager.service';
import { PhotoManager } from '../services/restcontroller/bizservice/photo.service';
import { Audio001wb } from '../services/restcontroller/entities/Audio001wb';
import { Video001wb } from '../services/restcontroller/entities/Video001wb';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-audiopopup',
  templateUrl: './audiopopup.component.html',
  styleUrls: ['./audiopopup.component.css']
})
export class AudiopopupComponent implements OnInit {
  @Input() title: string = '';
  details: any;
  @Input() sources: any;
  hexToRgb: any;
  audio: Audio001wb[] = [];
  rgbToHex: any;
  @HostBinding('style.--color_l1') colorthemes_1: any;
  @HostBinding('style.--color_l2') colorthemes_2: any;
  @HostBinding('style.--color_l3') colorthemes_3: any;
  @HostBinding('style.--color_l4') colorthemes_4: any;

  constructor(
    public activeModal: NgbActiveModal,
    private authManager: AuthManager, private audioManager: AudioManager,
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

    // this.title = this.title + ' - Show TimeStamp';
  }

  onAcceptClick() {
    if (this.details._id) {
      let audio001wb = new Audio001wb();
      audio001wb.flag = true;
      this.audioManager.updatesub(audio001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }
  onCloseClick() {
    if (this.details._id) {
      let audio001wb = new Audio001wb();
      audio001wb.flag = false;
      this.audioManager.updatesubss(audio001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }

}
