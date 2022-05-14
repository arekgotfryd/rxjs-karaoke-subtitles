import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, pairwise } from 'rxjs/operators';

const SUBTITLES = [
  {
    text: 'It had a begining',
    duration: 1000,
  },
  {
    text: 'It must have an end',
    duration: 1500,
  },
  {
    text: "Don't leave me in darkness",
    duration: 1000,
  },
  {
    text: 'Please give me your hand',
    duration: 2000,
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lines$;
  constructor() {
    this.lines$ = from(SUBTITLES).pipe(
      concatMap((val) => of(val).pipe(delay(val.duration))),
      pairwise(),
      map(([val1, val2]) => {
        return [val1.text, val2.text];
      })
    );
  }
}
