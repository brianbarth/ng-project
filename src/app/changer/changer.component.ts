import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css']
})
export class ChangerComponent implements OnInit {
  @Input() capsItems = [];

  scrambledArray = [];
  allCaps = [];
  caps: boolean;
  lower: boolean;
  scram: boolean;
  scramDone = false;
  scrambleWord;
  word: string;
  result = [];
  ary: string[];
  i;
  l;
  random;

  constructor() { }

  ngOnInit() {
  }

  // makeAllCaps() {
  //   this.capsItems = this.capsItems.map(function(x){return x.toUpperCase() })
  //   this.caps = true;
  //   this.lower = false;
  //   this.scram = false;
  // }
  // makeAllLower() {
  //   this.capsItems = this.capsItems.map(function(x){return x.toLowerCase() })
  //   this.lower = true;
  //   this.caps = false;
  //   this.scram = false;
  // }
  makeAllCaps() {
    this.caps = true;
  }
  makeAllLower() {
    this.caps = false;
  }
  unscramble() {
    this.scram = false;
  }
  scramble() {
    this.scram = true;
  }

  // scramble() {
  //   this.scrambledArray = [];
  //   this.capsItems.forEach(element => {
  //   this.ary = element.split('');
  //   this.l = this.ary.length;
  //   for ( this.i = 0; this.i < this.l; this.i++) {
  //     this.random = Math.floor(Math.random() * this.ary.length);
  //     this.result.push(this.ary[this.random]);
  //     this.ary.splice(this.random, 1);
  //   }
  //   this.scrambledArray.push(this.result.join(''));
  //   this.result = [];
  //   });
  //   this.scram = true;
  //   this.scramDone = true;
  // }
}

