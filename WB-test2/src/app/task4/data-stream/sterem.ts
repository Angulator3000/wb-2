import { combineLatest, delay, interval, map, merge, scan, startWith, takeUntil, tap, timer } from "rxjs";


const stream1$ = interval(1000).pipe(
  map((id) => ({id, stream:1})),
);

const stream2$ = interval(1500).pipe(
  map((id) => ({id, stream:2}))
);

const stream3$ = interval(2000).pipe(
  map((id) => ({id, stream:3}))
);

const delaydStream2$ = stream2$.pipe(
  delay(10000)
);

const delaydStream3$ = stream3$.pipe(
  delay(20000)
);

const stopTimer$ = timer(30000);

export const mergeStream1$ = merge(stream1$, delaydStream2$, delaydStream3$).pipe(
  tap((value: any) => console.log('sumStream$:', value))
);

export const sumStream$ = mergeStream1$.pipe(
  scan((acc, cur) => acc + cur.id, 0),
  startWith(0)
);

