import {Injectable} from '@angular/core';
import {P} from '@angular/core/src/render3';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  teamOneName: string;
  teamTwoName: string;
  teamOneScore: any = 0;
  teamTwoScore: any = 0;
  teamOneSc: any;
  teamTwoSc: any;

  constructor() {
    const saved = localStorage.getItem('savedData');
    if (saved) {
      const data = JSON.parse(saved);
      this.teamOneName = data.team1name;
      this.teamTwoName = data.team2name;
      this.teamOneScore = data.team1score;
      this.teamTwoScore = data.team2score;
    }
    this.teamOneSc = new BehaviorSubject<number>(this.teamOneScore);
    this.teamTwoSc = new BehaviorSubject<number>(this.teamTwoScore);
  }

  addPoints(team, amount?) {
    if (team === 1) {
      this.teamOneScore = this.teamOneScore + (amount ? amount : 1);
    } else {
      this.teamTwoScore = this.teamTwoScore + (amount ? amount : 1);
    }
    this.updateValues();
    this.setStorage();
  }

  subPoints(team, amount?) {
    if (team === 1) {
      this.teamOneScore = this.teamOneScore - (amount ? amount : 1);
    } else {
      this.teamTwoScore = this.teamTwoScore - (amount ? amount : 1);
    }
    this.updateValues();
    this.setStorage();
  }

  updateValues() {
    this.teamOneSc.next(this.teamOneScore);
    this.teamTwoSc.next(this.teamTwoScore);
  }

  setStorage() {
    localStorage.setItem('savedData', JSON.stringify({
      team1name: this.teamOneName,
      team2name: this.teamTwoName,
      team1score: this.teamOneScore,
      team2score: this.teamTwoScore
    }));
  }

  setNames(team, name) {
    this[team] = name;
    this.setStorage();
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
