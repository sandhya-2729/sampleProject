import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.css']
})
export class TotalBalanceComponent implements OnInit{
  public dashboardDetails = [];

  constructor(private _dashboardService: DashboardService){

  }
  ngOnInit() {
    this._dashboardService.getDashboardApi()
       .subscribe((response: any) =>{
      this.dashboardDetails = response.balance;
      console.log("API Response for Balance:", response)
      
    })
  }

}
