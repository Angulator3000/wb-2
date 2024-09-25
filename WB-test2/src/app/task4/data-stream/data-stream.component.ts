import { Component, OnInit } from '@angular/core';
import { from, map, merge, Observable, Subject, tap } from 'rxjs';
import {sumStream$,mergeStream1$, } from './sterem'

@Component({
  selector: 'app-data-stream',
  templateUrl: './data-stream.component.html',
  styleUrl: './data-stream.component.scss'
})
export class DataStreamComponent implements OnInit {
  mergeSteamt$!: Observable<any>;
  sumStreams$!: Observable<number>;
  startStream$ = new Subject<void>();

  ngOnInit(): void {
    this.startStream$.subscribe(() => {
      this.mergeSteamt$ = mergeStream1$;
      this.sumStreams$ = sumStream$;
    });
  };

  startStream(): void {
    this.startStream$.next();
  };
}
