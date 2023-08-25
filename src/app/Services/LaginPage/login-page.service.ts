import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http: HttpClient) { }


  login(body:any){
    return this.http.post('http://103.224.246.103:3004/login',body)
  }}
