import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit{

  public apiURL:string = "../../assets/sharedData/api.json";

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    
  }

  getDashboardApi(){
    return this._httpClient.get(this.apiURL)
  }

}
