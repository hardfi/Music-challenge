import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  teamOneName: string;
  teamTwoName: string;
  teamOneScore: any;
  teamTwoScore: any;
  display: boolean;
  selectedTeam: string;
  teamName: string;

  constructor(public ss: ScoreService) {
    this.teamOneName = 'Team 1';
    this.teamTwoName = 'Team 2';
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
  }

  ngOnInit() {
    this.teamOneScore = this.ss.get(1, 's');
    this.teamTwoScore = this.ss.get(2, 's');
    this.teamOneName = this.ss.get(1, 'name');
    this.teamTwoName = this.ss.get(2, 'name');
  }

  pointsOne(team, action) {
    let t1s = this.teamOneScore;
    let t2s = this.teamTwoScore;
    if (action === 'sub') {
      team === 1 ? t1s-- : t2s--;
    } else {
      team === 1 ? t1s++ : t2s++;
    }
    this.teamOneScore = t1s;
    this.teamTwoScore = t2s;

    this.ss.set(1, 's', this.teamOneScore);
    this.ss.set(2, 's', this.teamTwoScore);
  }

  showPopup(teamNum?) {
    this.display = !this.display;
    this.selectedTeam = teamNum;
  }

  saveName() {
    if (this.selectedTeam === 'Team 1') {
      this.teamOneName = this.teamName;
    } else {
      this.teamTwoName = this.teamName;
    }
    this.showPopup();

    this.ss.set(1, 'name', this.teamOneName);
    this.ss.set(2, 'name', this.teamTwoName);
  }
}
