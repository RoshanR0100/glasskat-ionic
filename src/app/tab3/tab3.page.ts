import { Component, OnInit } from '@angular/core';
import { ClipsService } from '../clips.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  providers:[]
})
export class Tab3Page {

  imgs: string[] = []
  res: any;
  constructor(y:ClipsService) {
    this.res = y.getClipUrl().then(e => {
      this.imgs = e;
      console.log('hello')
    })
   }  

  }

