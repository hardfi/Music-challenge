import {Component, Input, OnInit} from '@angular/core';
import {ScoreService} from '../../shared/services/score.service';
import {NavigationStart, Router} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;
  currentMenu: any[];
  allRoutes: any[];

  constructor(private ss: ScoreService, private router: Router) {
    this.allRoutes = [];
    this.currentMenu = [];
  }

  ngOnInit() {
    this.buildMenu();
    this.subsRouterEvents();
  }

  buildMenu() {
    routes.forEach(route => {
      if (route.path) {
        this.allRoutes.push({route: route.path, name: route.data[0]});
      }
    });
    this.changeMenu();
  }

  subsRouterEvents() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url.slice(1);
        setTimeout(() => {
        this.changeMenu();
        }, 200);
      }
    });
  }

  changeMenu() {
    const tempRoutes = [...this.allRoutes];
    tempRoutes.forEach((route, index) => {
      if (route.route === this.currentUrl) {
        tempRoutes.splice(index, 1);
      }
    });
    this.currentMenu = tempRoutes;
  }

  resetAll() {
    this.ss.resetAll();
  }

  resetScores() {
    this.ss.resetScores();
  }
}
