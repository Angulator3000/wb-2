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
  startStream$ = new Subject<void>()
id:any
stream!:any
  ngOnInit(): void {
    this.startStream$.subscribe(() => {
      this.mergeSteamt$ = mergeStream1$;
      this.sumStreams$ = sumStream$;
      this.stream =mergeStream1$.pipe(
        map(data => data.stream)
      );
      this.id =mergeStream1$.pipe(
        map(data => data.id)
      );
    });
  };

  startStream(): void {
    this.startStream$.next();
  }
}
