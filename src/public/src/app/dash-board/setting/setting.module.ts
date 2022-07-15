import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';



@NgModule({
  declarations: [ SettingComponent ],
  imports: [
    CommonModule,
    SettingRoutingModule,
 
    FormsModule
    
  ],
  providers: []
})

export class SettingModule { }
