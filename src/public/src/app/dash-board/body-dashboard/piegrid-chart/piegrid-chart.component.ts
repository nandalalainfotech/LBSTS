import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { single } from '../piegrid-chart/data';
// import { single } from '../salepie-chart/data';

@Component({
  selector: 'app-piegrid-chart',
  templateUrl: './piegrid-chart.component.html',
  styleUrls: ['./piegrid-chart.component.css']
})
export class PiegridChartComponent implements OnInit {

  percent!: number;
  loader!: Subscription;

  ngOnInit(): void {
    const timer = interval(1000);
    // this.loader = timer.subscribe(() => this.load());
  }

  ngOnDestroy(): void {
    this.loader.unsubscribe();
  }

  load(): void {
    this.percent = Math.random() * 100;
    console.log(this.percent);
  }

  percentToColor(percent: number, min: number, max: number): string {
    if (percent <= 0) {
      return "#00FF00";
    } else if (percent >= 100) {
      return "#FF0000";
    }

    const diff = max - min;
    let red = 0;
    let green = 0;
    let blue = 0;

    if (diff === 0) {
      percent = 100;
    } else {
      percent = ((percent - min) / diff) * 100;
    }

    if (percent < 50) {
      red = 255;
      green = Math.round(5.1 * percent);
    } else {
      green = 255;
      red = Math.round(510 - 5.1 * percent);
    }

    const hex = red * 0x10000 + green * 0x100 + blue * 0x1;
    return "#" + ("000000" + hex.toString(16)).slice(-6);
  }

}
