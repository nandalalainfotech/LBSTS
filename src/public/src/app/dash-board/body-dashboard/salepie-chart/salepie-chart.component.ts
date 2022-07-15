import { Component, OnInit, ViewChild } from '@angular/core';
// import { LegendPosition } from '@swimlane/ngx-charts';
// import { single } from '../salepie-chart/data';
import { PersonManager } from 'src/app/shared/services/restcontroller/bizservice/person.service';

import { ApexGrid, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  // grid: ApexGrid |any;
  colors: string[] | any ;
};


@Component({
  selector: 'app-salepie-chart',
  templateUrl: './salepie-chart.component.html',
  styleUrls: ['./salepie-chart.component.css']
})

// class single1 {
//   name?: string;
//   value?: string="";
// }

export class SalepieChartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  femalecount: number = 0;
  malecount: number = 0;
  femalepercentage: number = 0;
  malepercentage: number = 0;
  res: any;
  key: any;
 
  httpClient: any;
  domain: string[] | any;
  series: any[] = [];
  constructor(private personmanager: PersonManager) {
   
  }
  ngOnInit(): void {
    this.chartOptions = {
      series:[ this.malecount, this.femalecount],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#76BA99","E4AEC5"],
            legend: {
              position: "top"
            }
          }
        }
      ]
    };
  
    this.personmanager.allperson().subscribe((response) => {
      for (let i = 0; i < response.person001mb.length; i++) {
        if (response.person001mb[i].sex == 'male') {
          this.malecount++;
        }
        else if (response.person001mb[i].sex == 'female') {
          this.femalecount++;
        }
      }
      this.chartOptions.series = [this.malecount, this.femalecount];
    })
  
  }
  }






