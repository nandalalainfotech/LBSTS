import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcriberdetailsComponent } from './subcriberdetails.component';

const routes: Routes = [{
  path:"",
  component:SubcriberdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcriberdetailsRoutingModule { }
