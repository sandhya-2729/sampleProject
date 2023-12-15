import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit{
  public transactionHistoryData: any;

  constructor( private _dashboardService: DashboardService){}


  ngOnInit(): void {
    this._dashboardService.getDashboardApi()
    .subscribe((response: any) =>{
         this.transactionHistoryData = response.transactions;
          console.log("API response for transactions:", response)
    })
  }

}
