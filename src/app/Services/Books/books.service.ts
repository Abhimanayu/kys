import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http : HttpClient) {}

  list(){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/book/list',{headers})
  }


  addNew(body:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.post('http://103.224.246.103:3004/book',body,{headers})
  }

  update(body:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.post('http://103.224.246.103:3004/book/update',body,{headers})
  }

  delete(id:any){
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token') || '');
    return this.http.get('http://103.224.246.103:3004/book/deleteById?id=' +id,{headers})
  }
}
