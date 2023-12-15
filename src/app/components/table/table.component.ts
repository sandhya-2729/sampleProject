import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  public tableData: any;

  constructor( private _tableService: TableService ){}
  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData(){
    this._tableService.getTableData()
    .subscribe(data => {
      this.tableData = data;
    });
  }



}
