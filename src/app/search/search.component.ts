import { Component, OnInit } from '@angular/core';
import { ApigetService } from "../apiget.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
value = 'Clear me';
display='';
showspinner=false;
isShown=false;
ur="http://api.screenshotlayer.com/api/capture?access_key=ccdd5650ba30d84193a5cc7d1ad77246&url=http%3A%2F%2F";

  constructor() { 
 
  }
  getValue(val:string){
    this.showspinner=true;
    this.isShown=true;
    setTimeout(()=>{
      this.showspinner=false;
    },1000);
    this.display=""+this.ur+val+"";
    console.warn(this.display);

  }
  ngOnInit(): void {
  }

}
