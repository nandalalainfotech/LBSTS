import { Component, OnInit, ViewChild } from '@angular/core';
// import { LegendPosition } from '@swimlane/ngx-charts';
import { SubscriberdetailsManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberdetails.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexXAxis,
    ApexFill,
    ApexTooltip,
    ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    plotOptions: ApexPlotOptions | any;
    yaxis: ApexYAxis | any;
    xaxis: ApexXAxis | any;
    fill: ApexFill | any;
    tooltip: ApexTooltip | any;
    stroke: ApexStroke | any;
    legend: ApexLegend | any;
    grid: ApexGrid | any;
    colors: string[] | any;
};
@Component({
    selector: 'app-salebar-chart',
    templateUrl: './salebar-chart.component.html',
    styleUrls: ['./salebar-chart.component.css']
})


export class SalebarChartComponent implements OnInit {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: Partial<ChartOptions>;
    // name!: string | any;
    series: any[] = [];
    // public legendPosition: LegendPosition = LegendPosition.Below;
    animations: boolean = true;
    monthlyregistration?: Date;
    janregcount: number = 0;
    febregcount: number = 0;
    marregcount: number = 0;
    aprregcount: number = 0;
    mayregcount: number = 0;
    juneregcount: number = 0;
    julyregcount: number = 0;
    augregcount: number = 0;
    sepregcount: number = 0;
    octregcount: number = 0;
    novregcount: number = 0;
    decregcount: number = 0;
    switch_value: string | undefined;
    // series = [];
    constructor(private subscriberdetailsmanager: SubscriberdetailsManager) {

        this.chartOptions = {
            series: [
            ],

         
            chart: {
                type: "bar",
                height: 300,
                stacked: true,
                toolbar: {
                    show: false
                },

                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },

            colors: ["#76BA99"],

            xaxis: {
                type: "category",
                categories: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ]

            },
            legend: {
              
                    show: false,
                 
                offsetY: 40,
                // show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
                horizontalAlign: 'center', 
                floating: false,
            },
            fill: {
                opacity: 1,
                type: "gradient",
                gradient: {
                    //   shade: "light",
                    type: "horizontal",
                    // shade: "light",
                    // type: "horizontal",
                    // shadeIntensity: 0.25,
                    // gradientToColors: undefined,
                    // inverseColors: true,
                    // opacityFrom: 0.85,
                    // opacityTo: 0.85,
                    // stops: [50, 0, 100]
                }
            }
        };
    }


    ngOnInit(): void {
        this.subscriberdetailsmanager.allsubdetails().subscribe((response) => {
            console.log("not", response)
            for (let i = 0; i < response.length; i++) {
                let regdetails = new Date(response[i].monthlyregistration);
                const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                let monthName = response[i].monthlyregistration ? months[regdetails.getMonth()] : "";
                this.switch_value = monthName;
                switch (this.switch_value) {

                    case "01":
                        this.switch_value = "01";
                        this.janregcount++;

                        break;
                    case "02":
                        this.switch_value = "02";
                        this.febregcount++;
                        break;
                    case "03":
                        this.switch_value = "03";
                        this.marregcount++;
                        break;
                    case "04":
                        this.switch_value = "04";
                        this.aprregcount++;
                        break;
                    case "05":
                        this.switch_value = "05";
                        this.mayregcount++;
                        break;
                    case "06":
                        this.switch_value = "06";
                        this.juneregcount++;
                        console.log("musk", this.juneregcount)
                        break;
                    case "07":
                        this.switch_value = "07";
                        this.julyregcount++;
                        break;
                    case "08":
                        this.switch_value = "08";
                        this.augregcount++;
                        break;
                    case "09":
                        this.switch_value = "09";
                        this.sepregcount++;
                        break;
                    case "10":
                        this.switch_value = "10";
                        this.octregcount++;
                        break;
                    case "11":
                        this.switch_value = "07";
                        this.novregcount++;
                        break;
                    case "12":
                        this.switch_value = "12";
                        this.decregcount++;
                        break;
                }

            }
     
            this.chartOptions.series = [

                {
                    data: [this.janregcount, this.febregcount, this.marregcount,
                        this.aprregcount,this.mayregcount, this.juneregcount,this.julyregcount,
                        this.augregcount, this.sepregcount,this.octregcount,this.novregcount,
                        this.decregcount ]
                },

          
            ]
        },
        )
    }


}
