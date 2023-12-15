import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.css']
})
export class MoneyStatisticsComponent implements OnInit{
  public moneyStatisticsData: any;

  constructor( private _dashboardService: DashboardService){}


  ngOnInit(): void {
    this._dashboardService.getDashboardApi()
    .subscribe((response) => {
      // this.moneyStatisticsData = response.money_statistics;
      console.log("API Response for money_statistics:", response);

    })
  }

}
