import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-coundown-timer',
  templateUrl: './coundown-timer.component.html',
  styleUrls: ['./coundown-timer.component.css'],
  animations: [
    trigger('countUp', [
      state('start', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'scale(0)'
        }))
      ])
    ])
  ]
})
export class CoundownTimerComponent implements OnInit {
  count: number = 0;

  ngOnInit() {
    this.startCountAnimation();
  }

  startCountAnimation() {
    const targetCount = 100; // Change this to your desired final count
    const duration = 3000; // Change this to your desired animation duration in milliseconds

    interval(duration / targetCount).pipe(
      take(targetCount)
    ).subscribe(() => {
      this.count++;
    });
  }

}
