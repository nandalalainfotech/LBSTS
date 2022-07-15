import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
// import { LineChartModule, NgxChartsModule } from '@swimlane/ngx-graph';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { GojsAngularModule } from 'gojs-angular';
// import { NgApexchartsModule } from 'ng-apexcharts';
// import { ChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts';
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerModule } from 'ngx-color-picker';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SubscriptionmasterManager } from '../shared/services/restcontroller/bizservice/subscriptionmaster.service';
import { UserManager } from '../shared/services/restcontroller/bizservice/user.service';
import { DataSharedService } from '../shared/services/services/datashared.service';
import { BodyDashboardComponent } from './body-dashboard/body-dashboard.component';
import { PiegridChartComponent } from './body-dashboard/piegrid-chart/piegrid-chart.component';

import { ProductChartComponent } from './body-dashboard/product-chart/product-chart.component';
import { SalebarChartComponent } from './body-dashboard/salebar-chart/salebar-chart.component';
import { SalepieChartComponent } from './body-dashboard/salepie-chart/salepie-chart.component';
import { DashboardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
// import { APiechartComponent } from './body/a-piechart/a-piechart.component';
// import { BarchartComponent } from './body/barchart/barchart.component';
// import { BodyChartComponent } from './body/body-chart/body-chart.component';
// import { BodyComponent } from './body/body.component';
// import { ChatBoxComponent } from './body/chat-box/chat-box.component';
// import { ClientLoginComponent } from './body/client-login/client-login.component';
// import { LogsComponent } from './body/logs/logs.component';
// import { ProcessCardComponent } from './body/process-card/process-card.component';
// import { ReviewComponent } from './body/review/review.component';
// import { StateChartComponent } from './body/state-chart/state-chart.component';
// import { StatusOfSiteComponent } from './body/status-of-site/status-of-site.component';
// import { TablesComponent } from './body/tables/tables.component';
// import { DashboardRoutingModule } from './dash-board-routing.module';
// import { DashBoardComponent } from './dash-board.component';
// import { SubcategoryComponent } from './subcategory/subcategory.component';
// import { SubcatclassificationComponent } from './subcatclassification/subcatclassification.component';
// import { CategoryComponent } from './category/category.component';
// import { SubscriptionmasterComponent } from './subscriptionmaster/subscriptionmaster.component';
// import { ContentmasterComponent } from './contentmaster/contentmaster.component';
// import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { SideMenuComponent } from './side-menu/side-menu.component';
// import { SidemenuDashboardComponent } from './sidemenu-dashboard/sidemenu-dashboard.component';
// import { RadarChartComponent } from './body/radar-chart/radar-chart.component';
// import { UserManager } from '../shared/services/restcontroller/bizservice/user.service';
// import { GoJsChartComponent } from './body/go-js-chart/go-js-chart.component';
// import { ProgressBarModule } from 'primeng/progressbar';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { MatDialogModule } from '@angular/material/dialog';
import { SubscriberdetailsManager } from '../shared/services/restcontroller/bizservice/subscriberdetails.service';
// import * as ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
// import { ProgressbarModule } from 'ngx-bootstrap/ProgressbarModule';
import { NgCircleProgressModule } from "ng-circle-progress"


@NgModule({
    declarations: [
        DashBoardComponent,
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        BodyDashboardComponent,
        ProductChartComponent,
        SalebarChartComponent,
        SalepieChartComponent,
        // ComboChartComponent,
        // SalegaugeChartComponent,
        // PolarChartComponent,
        // RealtimeChartComponent,
        // AdvancepieChartComponent,
        // SalelineChartComponent,
        // DoughnutChartComponent,
        PiegridChartComponent,
        // SubcategoryComponent,
        // SubcatclassificationComponent,
        // CategoryComponent,
        // SubscriptionmasterComponent,
        // ContentmasterComponent,
        // CategorydetailsComponent,
        // HeaderComponent,
        // FooterComponent,
        // SideMenuComponent,
        // BodyComponent,
        // BodyChartComponent,
        // APiechartComponent,
        // // BodyLineChartComponent,
        // // BodyPiechartComponent,
        // BarchartComponent,
        // // BBarchartComponent,
        // LogsComponent,
        // StatusOfSiteComponent,
        // ProcessCardComponent,
        // // CardChartComponent,
        // ChatBoxComponent,
        // ClientLoginComponent,
        // ReviewComponent,
        // TablesComponent,
        // SidemenuDashboardComponent,
        // StateChartComponent,


        // TreeChartComponent,

        // SChartPieComponent,

        // ColumnChartComponent,
        // SChartComponent,
        // CardChart3Component,
        // CardChart2Component,
        // ModernChartComponent,
        // GoJsChartComponent,
        // GoJsChartModel1Component,
        // GoJsChartModelComponent,



        // NgxCumulioComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        // BarChartModule,
        // LineChartModule,
        // NgxChartsModule,
        // ChartsModule,
        NgApexchartsModule,
        NgCircleProgressModule.forRoot(),
        // NgxEchartsModule.forRoot({
        //     echarts
        //   }),
        // ApexCharts,
        // D3Module,
        // MatDividerModule,
        // MatToolbarModule,
        // PerfectScrollbarModule,
        // ProgressBarModule,
        // ProgressbarModule.forRoot(),
        // RoundProgressModule,
        TranslateModule.forRoot(),
        // FusionChartsModule,
        // GojsAngularModule,
        //         MaterialModule,
        //         MatButtonModule,
        //         MatFormFieldModule,
        //         MatInputModule,
        // MatDialogModule,
        // NgxChartsModule,
        // BreadcrumbModule,
        MatMenuModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatTabsModule,
        ColorPickerModule,
        DashboardRoutingModule,
        MatDialogModule
    ],
    providers: [DataSharedService, UserManager, SubscriptionmasterManager, SubscriberdetailsManager],
    exports: [NgbCollapseModule],
})
export class DashboardModule { }


