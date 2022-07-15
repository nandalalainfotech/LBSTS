import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentmasterRoutingModule } from './contentmaster-routing.module';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { PhotoComponent } from './photo/photo.component';
import { ContentmasterComponent } from './contentmaster.component';
import { AgGridModule } from 'ag-grid-angular';
import { PhotoManager } from 'src/app/shared/services/restcontroller/bizservice/photo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoManager } from 'src/app/shared/services/restcontroller/bizservice/video.service';
import { AudioManager } from 'src/app/shared/services/restcontroller/bizservice/audio.service';

@NgModule({
  declarations: [
    ContentmasterComponent,
    PhotoComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ContentmasterRoutingModule
  ],
  providers:[
    PhotoManager,
    VideoManager,
    AudioManager
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ContentmasterModule { }
