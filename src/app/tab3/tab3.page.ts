import { Component, OnInit } from '@angular/core';
import { ClipsService } from '../clips.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  providers:[ClipsService]
})
export class Tab3Page {

  imgs: string[] = []
  res: any;
  constructor( private y: ClipsService) {
    this.res = y.getClipUrl().then(e => {
      this.imgs = e;
    })
   }  

  }

