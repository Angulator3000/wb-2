import { Component, OnInit } from '@angular/core';
import { from, map, merge, Observable, Subject, tap } from 'rxjs';
import {sumStream$,mergeStream1$,stream1$,stream2$,stream3$, dataStream$ } from './sterem'

@Component({
  selector: 'app-data-stream',
  templateUrl: './data-stream.component.html',
  styleUrl: './data-stream.component.scss'
})
export class DataStreamComponent implements OnInit {
  mergeSteamt$!: Observable<any>;
  sumStreams$!: Observable<number>;
  startStream$ = new Subject<void>();
  stream1!: Observable<number>;
  stream2!: Observable<number>;
  stream3!: Observable<number>;

  ngOnInit(): void {
    this.startStream$.subscribe(() => {
      this.mergeSteamt$ = dataStream$;
      this.sumStreams$ = sumStream$;
      this.stream1 = stream1$.pipe(
        map(item => item.id)
      );
      this.stream2 = stream2$.pipe(
        map(item => item.id)
      );
      this.stream3 = stream3$.pipe(
        map(item => item.id)
      );
    });
  }

  startStream(): void {
    this.startStream$.next();
  }
}
