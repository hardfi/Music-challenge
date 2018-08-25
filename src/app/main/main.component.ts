import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoreService} from '../shared/services/score.service';

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
    this.teamOneName = this.ss.get(1, 'name');
    this.teamTwoName = this.ss.get(2, 'name');
    this.ss.teamOneSc.subscribe(value => this.teamOneScore = value);
    this.ss.teamTwoSc.subscribe(value => this.teamTwoScore = value);
  }

  addPoints(team, amount) {
    this.ss.addPoints(team, amount);
  }

  subPoints(team, amount?) {
    this.ss.subPoints(team, amount);
  }

  showPopup(teamNum?) {
    this.teamName = '';
    this.display = !this.display;
    this.selectedTeam = teamNum;
  }

  saveName() {
    if (this.selectedTeam === 'Team 1') {
      this.teamOneName = this.teamName;
      this.ss.setNames('teamOneName', this.teamOneName);
    } else {
      this.teamTwoName = this.teamName;
      this.ss.setNames('teamTwoName', this.teamTwoName);
    }
    this.showPopup();
  }
}
