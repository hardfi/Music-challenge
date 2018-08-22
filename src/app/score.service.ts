import {Injectable} from '@angular/core';
import {P} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  teamOneName: string;
  teamTwoName: string;
  teamOneScore: any = 0;
  teamTwoScore: any = 0;

  constructor() {
    const saved = localStorage.getItem('savedData');
    if (saved) {
      const data = JSON.parse(saved);
      this.teamOneName = data.team1name;
      this.teamTwoName = data.team2name;
      this.teamOneScore = data.team1score;
      this.teamTwoScore = data.team2score;
    }
  }

  set(team, key, value) {
    if (team === 1) {
      key === 'name' ? this.teamOneName = value : this.teamOneScore = value;
    } else {
      key === 'name' ? this.teamTwoName = value : this.teamTwoScore = value;
    }

    localStorage.setItem('savedData', JSON.stringify({
      team1name: this.teamOneName,
      team2name: this.teamTwoName,
      team1score: this.teamOneScore,
      team2score: this.teamTwoScore
    }));
  }

  get(team, key) {
    if (team === 1 && key === 'name') {
      return this.teamOneName;
    } else if (team === 1 && key !== 'name') {
      return this.teamOneScore;
    } else if (team === 2 && key === 'name') {
      return this.teamTwoName;
    } else {
      return this.teamTwoScore;
    }
  }
}
