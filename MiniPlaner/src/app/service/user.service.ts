import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    constructor(private httpClient: HttpClient) { }
  
    BACKEND_BASE = "http://localhost:3000";
  
    login(username: string, password: string): Observable<any> {
      return this.httpClient.post(this.BACKEND_BASE + '/api/user/login', {
        username: username,
        password: password
      }).pipe(map((resp:any)=>{
          return resp;
      }))
    }
  
    register(username: string, password: string): Observable<any> {
      return this.httpClient.post(this.BACKEND_BASE + '/api/user/register', {
        username: username,
        password: password
      })
    }
  
  }