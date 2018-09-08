import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-round2',
  templateUrl: './round2.component.html',
  styleUrls: ['./round2.component.scss']
})
export class Round2Component implements OnInit {
  riddles: any[];
  currentRiddle: any;
  display: boolean;
  toggleAnswer: boolean;

  constructor() {
    this.riddles = [
      {
        id: 1,
        text: ' Sire and Warner Bros. Records released it as the album\'s lead single on March 3, 1989. It was also included on the greatest hits compilation albums, The Immaculate Collection (1990), and Celebration (2009).',
        title: 'Madonna',
        answer: 'Like a Prayer'
      },
      {
        id: 2,
        text: 'It\'s a song from Billy Joel\'s 1977 album The Stranger, released as the B-side to his "She\'s Always a Woman" single. European capital.',
        title: 'Billy Joel',
        answer: 'Vienna'
      },
      {
        id: 3,
        text: 'Song recorded by American singer and songwriter Pink, featuring fun.\'s lead singer Nate Ruess. The song was chosen as the third single from Pink\'s sixth studio album, The Truth About Love (2012).',
        title: 'Pink',
        answer: 'Just Give Me a Reason'
      },
      {
        id: 4,
        text: 'Song by Prince and The Revolution. It is the title track from the 1984 album of the same name, which in turn is the soundtrack album for the 1984 film of the same name, and was released as the third single from that album. ',
        title: 'Prince',
        answer: 'Purple Rain'
      },
      {
        id: 5,
        text: 'It was released in 1984 as the lead single from his fourth album, Reckless (1984). The song was also featured in the 2002 video game Grand Theft Auto: Vice City on the fictional radio station Flash FM. ',
        title: 'Bryan Adams',
        answer: 'Run to You'
      },
      {
        id: 6,
        text: 'Song by American singer-songwriter Taylor Swift, featuring British singer Ed Sheeran and American rapper Future, recorded for her sixth studio album, Reputation (2017).',
        title: 'Taylor Swift',
        answer: 'End Game'
      },
      {
        id: 7,
        text: 'In an interview with Rolling Stone, Brandon Flowers said "This is the story of trying to meet someone in a club." [1] It is written in the key of B-flat minor.',
        title: 'The Killers',
        answer: 'Somebody Told Me'
      },
      {
        id: 8,
        text: 'It was written by Elton John with Bernie Taupin under the pseudonyms "Ann Orson" and "Carte Blanche", respectively, and intended as an affectionate pastiche of the Motown style, notably the various duets recorded by Marvin Gaye and singers such as Tammi Terrell and Kim Weston.',
        title: 'Elton John',
        answer: 'Don\'t Go Breaking My Heart'
      },
      {
        id: 9,
        text: 'Song by Barbadian singer Rihanna from her third studio album Good Girl Gone Bad (2007). It features American rapper Jay-Z, who co-wrote the song with its producers Tricky Stewart and Kuk Harrell, with additional writing from The-Dream.',
        title: 'Rihanna',
        answer: 'Umbrella'
      },
      {
        id: 10,
        text: 'Song by the British rock band Queen, featured on their 1978 album Jazz that was released as a single in 1979. The song also appears in the band\'s 1981 compilation album Greatest Hits, and in June 2011, as part of Queen\'s 40th anniversary celebrations.',
        title: 'Queen',
        answer: 'Don\'t Stop Me Now'
      },
    ];
  }

  ngOnInit() {
  }

  showHint(riddle) {
    this.toggleAnswer = false;
    this.display = true;
    this.currentRiddle = riddle;
  }

  showAnswer() {
    this.toggleAnswer = true;
    this.riddles.forEach((rid, index) => {
      if (rid.id === this.currentRiddle.id) {
        this.riddles.splice(index, 1);
      }
    });
  }
}
