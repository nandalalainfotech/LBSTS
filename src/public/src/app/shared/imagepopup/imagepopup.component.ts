import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { deserialize } from 'serializer.ts/Serializer';
import { AuthManager } from '../services/restcontroller/bizservice/auth-manager.service';
import { PhotoManager } from '../services/restcontroller/bizservice/photo.service';
import { Photo001wb } from '../services/restcontroller/entities/Photo001wb';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrls: ['./imagepopup.component.css']
})
export class ImagepopupComponent implements OnInit {
  @Input() title: string = '';
  details: any;
  @Input() source: any;
  hexToRgb: any;
  photo: Photo001wb[] = [];
  rgbToHex: any;
  @HostBinding('style.--color_l1') colorthemes_1: any;
  @HostBinding('style.--color_l2') colorthemes_2: any;
  @HostBinding('style.--color_l3') colorthemes_3: any;
  @HostBinding('style.--color_l4') colorthemes_4: any;

  constructor(
    public activeModal: NgbActiveModal,
    private authManager: AuthManager, private photoManager: PhotoManager,
  ) { }

  ngOnInit(): void {
    console.log("this.details", this.details)
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
      let photo001wb = new Photo001wb();
      photo001wb.flag = true;
      this.photoManager.updatesub(photo001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }
  onCloseClick() {
    if (this.details._id) {
      let photo001wb = new Photo001wb();
      photo001wb.flag = false;
      this.photoManager.updatesubss(photo001wb,this.details._id).subscribe((response) => {
      })
      this.activeModal.close('No');
    }
  }
}
