import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http:HttpClient) { }

  list(){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/plan/list',{headers})
  }

  addNew(body:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.post('http://103.224.246.103:3004/plan/list',body,{headers})
  }

  update(body:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.post('http://103.224.246.103:3004/plan/update',body,{headers})
  }

  delete(id:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/plan/deleteById?id=' +id,{headers})
  }
}
