import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  teamOneScore: any;
  teamTwoScore: any;
  teamOneName: string;
  teamTwoName: string;

  constructor(public ss: ScoreService) {
  }

  ngOnInit() {
    this.teamOneName = this.ss.getNames('teamOneName');
    this.teamTwoName = this.ss.getNames('teamTwoName');
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
