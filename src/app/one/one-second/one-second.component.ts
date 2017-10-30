import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent';
import { BaseOneComponent } from '../base-one.component';

@Component({
  selector: 'app-one-second',
  templateUrl: './one-second.component.html',
  styleUrls: ['./one-second.component.css']
})
export class OneSecondComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
