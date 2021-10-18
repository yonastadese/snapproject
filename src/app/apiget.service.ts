import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApigetService {

  constructor(private http:HttpClient) { }
  posts: any[]=[];
  getdata(){
    let url="http://api.screenshotlayer.com/api/capture?access_key=ccdd5650ba30d84193a5cc7d1ad77246&url=http%3A%2F%2F";
    return this.http.get(url);
  }
}
