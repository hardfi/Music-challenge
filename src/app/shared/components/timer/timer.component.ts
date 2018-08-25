import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: number;
  timerInterval: any;
  paused: boolean;
  printTime: number;
  displayTime: boolean;
  initial: boolean;

  constructor() {
    this.timer = 10;
    this.initial = true;
  }

  ngOnInit() {
  }

  count(time?) {
    this.initial = false;
    if (!time) {
      this.printTime = this.timer;
    }
    let counter = time || this.timer;
    this.paused = false;
    clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (!this.paused) {
        counter--;
        this.printTime = counter;
        if (counter < 1 && !this.paused) {
          this.displayTime = true;
          clearInterval(this.timerInterval);
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.paused = !this.paused;
    if (!this.paused) {
      this.count(this.printTime);
    }
  }

}
