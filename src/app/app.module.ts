import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GridComponent } from './components/grid/grid.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { SavingPlanComponent } from './components/saving-plan/saving-plan.component';
import { TotalBalanceComponent } from './components/total-balance/total-balance.component';
import { DashboardService } from './services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MoneyStatisticsComponent } from './components/money-statistics/money-statistics.component';
import { ChartsComponent } from './components/charts/charts.component';
import {
       Chart, Colors
} from 'chart.js';
import { registerables } from 'chart.js';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TableComponent } from './components/table/table.component';
import { TableService } from './services/table.service';
Chart.register(...registerables);


const ngxUiLoaderConfig : NgxUiLoaderConfig = {
  text : 'loading...',
  textColor : 'blue',
  textPosition: 'center-center',
  pbColor: 'blue',
  bgsColor: 'blue',
  fgsColor: 'blue',
  fgsType: SPINNER.threeStrings,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5

}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ToolbarComponent,
    GridComponent,
    CreditCardComponent,
    QuickActionsComponent,
    SavingPlanComponent,
    TotalBalanceComponent,
    MoneyStatisticsComponent,
    ChartsComponent,
    TransactionHistoryComponent,
    TableComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  
  
  ],
  providers: [DashboardService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
