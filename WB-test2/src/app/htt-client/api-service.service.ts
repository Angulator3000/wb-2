import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private apiUrl = 'https://api.github.com/users';
private http:HttpClient = inject(HttpClient);
public  searchUserID(userId:string):Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url).pipe(
      map((response:any)=> response || null)
    )
  };
public  getMockUser(): Observable<any> {
  return of({
    id: '999999999',
    login: 'MockUser1',
    avatar_url: '/WB-test2/images/МОК.png',
    html_url: 'https://www.youtube.com/watch?v=cNHSIK4DSbw'
  });
}

}
