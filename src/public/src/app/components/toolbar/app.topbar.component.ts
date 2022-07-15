import { Component, OnDestroy } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { AppMainComponent } from '@app/components/main/app.main.component';
import { BreadcrumbService } from '@app/services/app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnDestroy {
  subscription: Subscription;

  items: MenuItem[];

  constructor(public breadcrumbService: BreadcrumbService, public app: AppComponent, public appMain: AppMainComponent) {
    this.subscription = breadcrumbService.itemsHandler.subscribe((response) => {
      this.items = response;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
