import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  baseUrl : string = 'http://localhost:3000/';
  httpHeader : HttpHeaders = new HttpHeaders().set("Content-Type","application/json");

  getData(endPoint:string){
    let url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeader})
  }

  postData(endPoint:string,body:any){
     let url = this.baseUrl + endPoint;
     return this.http.post(url,body,{headers:this.httpHeader})
  }


}
