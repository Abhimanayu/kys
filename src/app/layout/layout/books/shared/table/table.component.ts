import { Component, Input, EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/Books/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  @Input()
  books:any[]=[]

  @Input()
  pageNumber:number=1

  @Input()
  totalRecord:number=0;

  @Input()
  noOfPage:any[]=[]

  @Input()
  headers:any[]=[]

  @Input()
  response:any[]=[]

  @Input()
  apiEnpoint:string=''

  @Output()
  pageAction: EventEmitter<any> = new EventEmitter<number>();

  @Output()
  deleteAction: EventEmitter<any> = new EventEmitter<string>();


  // @Output()
  // book: EventEmitter<any>=new EventEmitter <any>();

  @Output()
  searchAction: EventEmitter<any> =new EventEmitter<any>();


  selectedImage:any
  selectedId:any
  addNewBooks!:FormGroup;
  disablePre:boolean=false;
  disableNext:boolean=false;
  users:any;

  constructor(private book:BooksService, private router:Router,private fb:FormBuilder){
    this.initialloginform()
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  getPaginatedData(pageNumber:number){
    this.pageNumber=pageNumber
    this.pageAction.emit(pageNumber)
    // const startIndex = (pageNumber - 1) * 10;
    // const endIndex = startIndex + 10;
    // this.pageNumber = pageNumber;
    // this.books = [...this.response.slice(startIndex, endIndex)];

    // this.books.forEach((element: any) => {
    //   element.image = element.image.includes(this.apiEnpoint) ? element.image : this.apiEnpoint + element.image;
    // });
  }


  search(value:any){
    this.searchAction.emit(this.books=this.response.filter( (res:any) => res.bookName.toLowerCase().includes(value.toLowerCase()) || res.category.toLowerCase().includes(value)))
  }


  delete(item:any){
    this.selectedId=item._id;
    this.deleteAction.emit(item._id)
  }

  previous() {
    this.pageAction.emit(this.pageNumber-1);
    // if (this.pageNumber<2) {
    //   this.disablePre=true;
    // }
    // if (this.pageNumber > 1) {
    //   this.pageNumber = this.pageNumber - 1;
    //   this.getPaginatedData(this.pageNumber);
    // }
  }

  next() {
    this.pageAction.emit(this.pageNumber+1);
    // if (this.pageNumber>4 ) {
    //   this.disableNext=true;
    // }
    // if (this.pageNumber < this.noOfPage.length) {
    //   this.pageNumber = this.pageNumber + 1
    //   this.getPaginatedData(this.pageNumber);
    // }
  }



  initialloginform(){
    this.addNewBooks = this.fb.group({
      bookName:['',[Validators.required]],
      pricing:['',[Validators.required]],
      category:['',[Validators.required]],
      attachment:['',[Validators.required]],
    })
  }


}










  // public get bookName() : any {
  //   return this.addNewBooks.get('bookName')
  // }
  // public get pricing() : any {
  //   return this.addNewBooks.get('pricing')
  // }
  // public get category() : any {
  //   return this.addNewBooks.get('category')
  // }
  // public get attachment() : any {
  //   return this.addNewBooks.get('attachment')
  // }

  // onImageSelection(image:any){
  //   console.log(image)
  //   this.selectedImage=image.target.files[0];
  // }



  // addNew(){
  //   var postBody = new FormData();
  //   postBody.append('bookName',this.addNewBooks.controls['bookName']?.value)
  //   postBody.append('pricing',this.addNewBooks.controls['pricing']?.value)
  //   postBody.append('category',this.addNewBooks.controls['category']?.value)
  //   postBody.append('attachment', this.selectedImage)

  //   this.book.addNew(postBody).subscribe((res:any)=>{
  //     this.users = res
  //     console.log(res)

  //     // localStorage.setItem('token',res.token)
  //   })
  // }

  // update(){
  //   var Body = new FormData();
  //   Body.append('bookName',this.addNewBooks.controls['bookName']?.value)
  //   Body.append('pricing',this.addNewBooks.controls['pricing']?.value)
  //   Body.append('category',this.addNewBooks.controls['category']?.value)
  //   Body.append('attachment', this.selectedImage)
  //   Body.append('_id',this.selectedId)

  //   this.book.update(Body).subscribe((res:any)=>{
  //     this.users = res
  //     console.log(res)

  //     // localStorage.sektItem('token',res.token)
  //   })
  // }

  // delete(){
  //   // var Body = new FormData();
  //   // Body.append('bookName',this.addNewBooks.controls['bookName']?.value)
  //   // Body.append('pricing',this.addNewBooks.controls['pricing']?.value)
  //   // Body.append('category',this.addNewBooks.controls['category']?.value)
  //   // Body.append('attachment', this.selectedImage)
  //   // Body.append('_id',this.selectedId)

  //   this.book.delete(this.selectedId).subscribe((res:any)=>{
  //     this.users = res
  //     console.log(res)

  //     // localStorage.setItem('token',res.token)
  //   })
  // }
