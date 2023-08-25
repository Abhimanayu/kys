import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/Books/books.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private book:BooksService,private router:Router){

  }

  books(){
    this.book.list().subscribe((res:any)=>{
      this.books = res
      console.log(res)
    })
    this.router.navigate(['login'])
  }
}
