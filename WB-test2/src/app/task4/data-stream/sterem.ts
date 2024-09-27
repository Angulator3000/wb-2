import { BehaviorSubject, combineLatest, delay, interval, map, merge, scan, startWith, takeUntil, tap, timer } from "rxjs";

const stopTimer$ = timer(30000);

export const stream1$ = interval(1000).pipe(
  map((id) => ({id, stream:1})),
  takeUntil(stopTimer$)
);

export const stream2$ = interval(1500).pipe(
  delay(10000),
  map((id) => ({id, stream:2})),
  takeUntil(stopTimer$)
);

export const stream3$ = interval(2000).pipe(
  delay(20000),
  map((id) => ({id, stream:3})),
  takeUntil(stopTimer$)
);

export const mergeStream1$ = merge(stream1$, stream2$, stream3$).pipe(
  // tap((value: any) => console.log('sumStream$:', value)),
  takeUntil(stopTimer$)
);

export const sumStream$ = mergeStream1$.pipe(
  scan((acc, cur) => acc + cur.id, 0),
  startWith(0)
);

export const dataStream$ = new BehaviorSubject<any[]>([]);

mergeStream1$.subscribe(item => {
  const currentData = dataStream$.getValue();
  dataStream$.next([...currentData, item]);
});
