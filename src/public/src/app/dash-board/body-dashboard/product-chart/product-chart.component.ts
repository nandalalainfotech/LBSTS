import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { SubscriptionmasterManager } from 'src/app/shared/services/restcontroller/bizservice/subscriptionmaster.service';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit {

  goldCount: number = 0;
  diamondCount: number = 0;
  platinumCount: number = 0;
  silverCount: number = 0;
  goldpercentage: number = 0;
  diamondpercentage: number = 0;
  platinumpercentage: number = 0;
  silverpercentage: number = 0;

  value = 100;
  seconds: number = 0;
  percentage: number | undefined;
  status = 0;
  // response: number | undefined;
  // diamond: string = "diamond";
  constructor(
    private subscriptionmaster: SubscriptionmasterManager
  ) {

  }

  ngOnInit(): void {

    this.subscriptionmaster.allsubmaster().subscribe((response,) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].subpname == 'gold') {
          this.goldCount++;
        }
        else if (response[i].subpname == 'diamond') {
          this.diamondCount++;
        } else if (response[i].subpname == 'platinum') {
          this.platinumCount++;
        } else if (response[i].subpname == 'silver') {
          this.silverCount++;
        }
      }
      this.goldpercentage = (Math.floor((this.goldCount/response.length)*100)
      );
      this.diamondpercentage = (Math.floor((this.diamondCount/response.length)*100)
      );
      this.platinumpercentage = (Math.floor((this.platinumCount/response.length)*100)
      );
      this.silverpercentage = (Math.floor((this.silverCount/response.length)*100)
      );
    })
  }
}
function setWidth(currentWidth: any) {
  throw new Error('Function not implemented.');
}

