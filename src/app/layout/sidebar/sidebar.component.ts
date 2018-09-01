import {Component, Input, OnInit} from '@angular/core';
import {ScoreService} from '../../shared/services/score.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private ss: ScoreService) {
  }

  ngOnInit() {
  }

  resetAll() {
    this.ss.resetAll();
  }

  resetScores() {
    this.ss.resetScores();
  }

}
