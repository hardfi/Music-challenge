import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  teamOneScore: any;
  teamTwoScore: any;
  teamOneName: string;
  teamTwoName: string;

  constructor(public ss: ScoreService) {
  }

  ngOnInit() {
    this.ss.teamOneNa.subscribe(value => this.teamOneName = value);
    this.ss.teamTwoNa.subscribe(value => this.teamTwoName = value);
    this.ss.teamOneSc.subscribe(value => this.teamOneScore = value);
    this.ss.teamTwoSc.subscribe(value => this.teamTwoScore = value);
  }

  addPoints(team, amount) {
    this.ss.addPoints(team, amount);
  }

  subPoints(team, amount?) {
    this.ss.subPoints(team, amount);
  }
}
