import {Injectable} from '@angular/core';
import {P} from '@angular/core/src/render3';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private teamOneName = 'Team 1';
  private teamTwoName = 'Team 2';
  private teamOneScore = 0;
  private teamTwoScore = 0;
  public teamOneSc: any;
  public teamTwoSc: any;
  public teamOneNa: any;
  public teamTwoNa: any;

  constructor() {
    const data = JSON.parse(localStorage.getItem('savedData'));

    if (data) {
      this.teamOneName = data.team1name;
      this.teamTwoName = data.team2name;
      this.teamOneScore = data.team1score;
      this.teamTwoScore = data.team2score;
    }

    this.teamOneSc = new BehaviorSubject<number>(this.teamOneScore);
    this.teamTwoSc = new BehaviorSubject<number>(this.teamTwoScore);
    this.teamOneNa = new BehaviorSubject<string>(this.teamOneName);
    this.teamTwoNa = new BehaviorSubject<string>(this.teamTwoName);
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
    this.teamOneNa.next(this.teamOneName);
    this.teamTwoNa.next(this.teamTwoName);
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
    this.updateValues();
    this.setStorage();
  }

  resetAll() {
    this.teamOneName = 'Team 1';
    this.teamTwoName = 'Team 2';
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
    this.updateValues();
    this.setStorage();
  }

  resetScores() {
    this.teamOneScore = 0;
    this.teamTwoScore = 0;
    this.updateValues();
    this.setStorage();
  }
}
