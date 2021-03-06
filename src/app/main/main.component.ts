import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoreService} from '../shared/services/score.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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
  }

  ngOnInit() {
    this.ss.teamOneSc.subscribe(value => this.teamOneScore = value);
    this.ss.teamTwoSc.subscribe(value => this.teamTwoScore = value);
    this.ss.teamOneNa.subscribe(value => this.teamOneName = value);
    this.ss.teamTwoNa.subscribe(value => this.teamTwoName = value);
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
