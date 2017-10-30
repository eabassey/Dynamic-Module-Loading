import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent';
import { BaseOneComponent } from '../base-one.component';

@Component({
  selector: 'app-one-first',
  templateUrl: './one-first.component.html',
  styleUrls: ['./one-first.component.css']
})
export class OneFirstComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {

  }
  

}
