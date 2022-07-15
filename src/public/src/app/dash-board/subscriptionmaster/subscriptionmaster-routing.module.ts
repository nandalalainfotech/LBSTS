import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionmasterComponent } from './subscriptionmaster.component';

const routes: Routes = [{
  path:"",
  component:SubscriptionmasterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionmasterRoutingModule { }
