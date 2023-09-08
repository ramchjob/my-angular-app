import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = 'https://dummyjson.com/users';
  constructor(private httpClient: HttpClient) { }

  public getUsers():  Observable<any> {
    return this.httpClient.get(this.url).pipe(map((data: any) => data.users ), 
    catchError(error => { return throwError('Its a Trap!')})
);
  }
}
