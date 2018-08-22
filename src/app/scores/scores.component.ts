import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../score.service';

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
    this.teamOneScore = this.ss.get(1, 's');
    this.teamTwoScore = this.ss.get(2, 's');
    this.teamOneName = this.ss.get(1, 'name');
    this.teamTwoName = this.ss.get(2, 'name');
  }

  scores(team, act) {
    if (team === 1 && act === 'sub') {
      this.teamOneScore--;
    } else if (team === 1 && act === 'add') {
      this.teamOneScore++;
    } else if (team === 2 && act === 'sub') {
      this.teamTwoScore--;
    } else if (team === 2 && act === 'add') {
      this.teamTwoScore++;
    }

    this.setScoresService();
  }

  setScoresService() {
    this.ss.set(1, 's', this.teamOneScore);
    this.ss.set(2, 's', this.teamTwoScore);
  }
}
