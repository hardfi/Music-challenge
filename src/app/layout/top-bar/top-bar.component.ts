import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {
  items: MenuItem[];
  display: boolean;

  constructor(private router: Router) {
    this.items = [
      {
        label: 'Menu',
        icon: 'pi pi-bars'
      }
    ];
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.display = false;
      }
    });
  }

  sidebarOpen() {
    this.display = true;
  }

}
