import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private http:HttpClient = inject(HttpClient);
private apiUrl = 'https://api.github.com/users';

public  searchUserID(userId:string):Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url).pipe(
      map((response:any)=> response || null)
    )
  };
public  getMockUser(): Observable<any> {
  return of({
    id: '1',
    login: 'MockUser1',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    html_url: 'https://github.com/MockUser1'
  });
}

}
