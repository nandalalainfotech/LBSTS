import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcriberdetailsRoutingModule } from './subcriberdetails-routing.module';
import { SubcriberdetailsComponent } from './subcriberdetails.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { SubscriberdetailsManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberdetails.service';


@NgModule({
  declarations: [SubcriberdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SubcriberdetailsRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers:[
    SubscriberdetailsManager
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SubcriberdetailsModule { }
