import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
   ctx: any;
   config: any;
   chartData: number[] =[];
   chartDataLabels: any[] = [];
  ngOnInit() {
    this.chartData.push(1);
    this.chartData.push(2);
    this.chartData.push(3);
    this.chartData.push(4);
    this.chartData.push(5);
    this.chartData.push(6);
    this.chartData.push(4);
    this.chartData.push(2);
    this.chartData.push(3);
    this.chartData.push(4);
    this.chartData.push(5);
    this.chartData.push(2);

    this.chartDataLabels.push('Jan')
    this.chartDataLabels.push('Feb')
    this.chartDataLabels.push('Mar')
    this.chartDataLabels.push('Apr')
    this.chartDataLabels.push('May')
    this.chartDataLabels.push('Jun')
    this.chartDataLabels.push('Jul')
    this.chartDataLabels.push('Aug')
    this.chartDataLabels.push('Sep')
    this.chartDataLabels.push('Oct')
    this.chartDataLabels.push('Nov')
    this.chartDataLabels.push('Dec')

    this.ctx = document.getElementById('myChart');
    this.config = {
      type : 'bar',
      options : {

      },
      data : {
        labels : this.chartDataLabels,
        datasets : [{
          label : 'Chart Data',
          data : this.chartData,
          borderWidth : 1,
          backgroundColor : ['#eee', '#eef', '#00000']
        }],
      }
    }
    const myChart = new Chart(this.ctx, this.config);
  }
 
}
