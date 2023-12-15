import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService implements OnInit{
  public tableUrl: any = '../../assets/sharedData/tableapi.json';

  constructor(private _httpClient: HttpClient) { }
  ngOnInit(){
    
  }

  getTableData():  Observable<any[]>{
    return this._httpClient.get<any[]>(this.tableUrl);
  }
}
