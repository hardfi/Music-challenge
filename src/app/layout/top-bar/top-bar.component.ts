import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {
  items: MenuItem[];
  display: boolean;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        icon: 'pi pi-bars'
      }
    ];
  }

  sidebarOpen() {
    this.display = true;
  }

}
