import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { SKU, list } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Vinyl Collection';
  topicname ="";

  readonly inventory = list;

  //onNewItem = new EventEmitter<SKU>();

  constructor() { }

  ngOnInit() { }

 // display(albumName, artistName, rate, image) {
    //console.info('item selected ', albumName, artistName, rate, image);
   // this.onNewItem.next(this.list[]);
  }
