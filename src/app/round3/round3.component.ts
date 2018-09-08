import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-round3',
  templateUrl: './round3.component.html',
  styleUrls: ['./round3.component.scss']
})
export class Round3Component implements OnInit {
  riddles: any[];

  constructor() {
    this.riddles = [
      {text: 'hair', title: 'Word #1'},
      {text: 'love', title: 'Word #2'},
      {text: 'cross', title: 'Word #3'},
      {text: 'brain', title: 'Word #4'},
      {text: 'home', title: 'Word #5'},
      {text: 'night', title: 'Word #6'},
      {text: 'christmas', title: 'Word #7'},
      {text: 'river', title: 'Word #8'},
      {text: 'rain', title: 'Word #9'},
      {text: 'fun', title: 'Word #10'},
    ];
  }

  ngOnInit() {
  }

  delete(text) {
    this.riddles.forEach((rid, index) => {
      if (rid.text == text) {
        this.riddles.splice(index, 1);
      }
    });
  }

}
