import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/`);
  }

  createUser(data:Object) {
    return this.http.post<any[]>(`https://jsonplaceholder.typicode.com/posts`,data);
  }

   userResponseSubject$ = new BehaviorSubject(null);

   setUserResponse(data : any) {
     this.userResponseSubject$.next(data);
   }

   getUserResponse() {
    return this.userResponseSubject$.asObservable();
   }

   userUpdateSubject$ = new BehaviorSubject(null);

   setUserUpdate(data : any){
    this.userUpdateSubject$.next(data);
   }

   getUserUpdate() {
    return this.userUpdateSubject$.asObservable();
   }
}
