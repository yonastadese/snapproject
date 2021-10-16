import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {  } from "module";


@Injectable({
  providedIn: 'root',
  // provide
})
export class GetSnapService {
   _url: String='';
   _tokken: String= 'ccdd5650ba30d84193a5cc7d1ad77246';

  constructor(
    private http:HttpClient,
    // @var :'fd'
  ) { }

  gett() {
   return this.http.get('http://api.screenshotlayer.com/api/capture?access_key='+this._tokken+'url='+this._url+'&viewport=1440x900&fullpage=1');
 }
}
 