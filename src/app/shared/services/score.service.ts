import {Injectable} from '@angular/core';
import {P} from '@angular/core/src/render3';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  teamOneName: string;
  teamTwoName: string;
  teamOneScore: number;
  teamTwoScore: number;
  teamOneSc: any;
  teamTwoSc: any;

  constructor() {
    const saved = localStorage.getItem('savedData');
    if (saved) {
      const data = JSON.parse(saved);
      this.teamOneName = (data.team1name ? data.team1name : 'Team 1');
      this.teamTwoName = (data.team2name ? data.team2name : 'Team 2');
      this.teamOneScore = (data.team1score ? data.team1score : 0);
      this.teamTwoScore = (data.team2score ? data.team2score : 0);
    }
    this.teamOneSc = new BehaviorSubject<number>(this.teamOneScore);
    this.teamTwoSc = new BehaviorSubject<number>(this.teamTwoScore);
  }

  addPoints(team, amount?) {
    this[team] = this[team] + (amount ? amount : 1);
    this.updateValues();
    this.setStorage();
  }

  subPoints(team, amount?) {
    this[team] = this[team] - (amount ? amount : 1);
    this.updateValues();
    this.setStorage();
  }

  private updateValues() {
    this.teamOneSc.next(this.teamOneScore);
    this.teamTwoSc.next(this.teamTwoScore);
  }

  private setStorage() {
    localStorage.setItem('savedData', JSON.stringify({
      team1name: this.teamOneName,
      team2name: this.teamTwoName,
      team1score: this.teamOneScore,
      team2score: this.teamTwoScore
    }));
  }

  setNames(team: string, name: string) {
    this[team] = name;
    this.setStorage();
  }

  getNames(team: string): string {
    return this[team];
  }
}
