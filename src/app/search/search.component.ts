import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import{ GetSnapService } from '../.get-snap.service.ts';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'
  // providers: [GetSnapService]
  ]
})
export class SearchComponent implements OnInit {
value = 'Clear me';
 tokk='ccdd5650ba30d84193a5cc7d1ad77246';
//  photo;
  constructor(public getSnapService : GetSnapService) { 
    // String photo=getSnapService.gett();

  }

  ngOnInit(): void {
  }

}
