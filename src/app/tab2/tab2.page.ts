import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Coordinate } from './coordinates';
import { h337 } from 'heatmap.js';
import { ApiService } from '../api.service';

declare let h337 : any; //heatmap.js global object

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  providers: [ApiService]
})

export class Tab2Page implements OnInit {

      gradientCfg = { // heatmap gradient color range
        '0.15': '#6ad180', // green
        '0.25': '#7cd573',
        '0.35': '#90d865',
        '0.45': '#a4da57',
        '0.55': '#badc48',
        '0.65': '#c9cf35',
        '0.75': '#d6c226',
        '0.80': '#e2b41c',
        '0.85': '#e2961d',
        '0.90': '#dd7826',
        '0.95': '#d25c30',
        '1.0': '#c24039' // highest red
      };
      heatmap: any = null; // heatmap instance
      coord: any; // heatmap coordinates array
      coordinates: Array<Coordinate> = [];
      heatmapContainer: HTMLElement;  // heatmap container HTML element

    constructor( private service: ApiService ){
       
    }


    ngOnInit() {
        const heatmapConfig = { // heatmap config object. For more info visit documentation
          container: document.querySelector('#heatmapContainer'),
          opacity: .8,
          radius: 7,
          visible: true,
          gradient: this.gradientCfg,
          backgroundColor: 'inherit'
      };  
      this.heatmap = h337.create(heatmapConfig); // creating the instance
      // var result = this.service.getData().subscribe(e => {
      //   this.coord = e
      //   this.coordinates = this.coord.map(e => ({ x: e.x, y: e.y, value: 1, timestamp: e.timestamp }))
      //   this.heatmap.setData({ max: 30, data: this.coordinates });
      // });

      for(var i = 0;i < 50; i++){
        this.coordinates.push({ x: this.getRandomInt(0,500), y: this.getRandomInt(0,500), value: 1, timestamp: new Date() } as Coordinate)
      }

      console.log(this.coordinates);
      this.heatmap.setData({ max: 30, data: this.coordinates });       
         // passing the dummy coordinates
      
    }
    
    getRandomInt(min,max){
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random()*(max-min)+min)
    }
}