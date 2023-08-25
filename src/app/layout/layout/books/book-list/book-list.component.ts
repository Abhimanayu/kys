import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/Services/Books/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {


  selectedImage:any
  selectedId:any
  addNewBooks!:FormGroup;
  disablePre:boolean=false;
  disableNext:boolean=false;
  users:any;


  books: any[] = [];
  pageNumber: number = 1
  totalRecord: number = 0
  noOfPage: any[] = []
  response: any;
  apiEnpoint:string='http://103.224.246.103:3004/'

  headers:any[]=[
    {name:'#',key:'index',type:'number'},
    {name:'Name',key:'bookName',type:'string'},
    {name:'Image',key:'image',type:'image'},
    {name:'Prices',key:'pricing',type:'number'},
    {name:'Category',key:'category',type:'string'},
  ];


  constructor(private list:BooksService,private fb:FormBuilder){
    this.book();
    this.initialloginform()
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  book(){
    this.list.list().subscribe((res:any)=>{
      this.books = res.data;
      this.books = [...res.data.slice(0,10)];
      this.totalRecord = res.data.length;
      this.response =[... res.data];
      for (let index = 0; index < this.totalRecord/10; index++) {
        this.noOfPage.push(index+1);
      }

      this.books.forEach((element:any)=>{
        element.image= element.image.includes(this.apiEnpoint ) ? element.image: this.apiEnpoint + element.image;
      })
      console.log(res)
    })
  }


  getPaginatedData(pageNumber:number){
    this.pageNumber = pageNumber;
    this.books = [...this.response.slice((pageNumber - 1)*10,pageNumber*10)]
    this.books.forEach((element:any)=>{
      element.image= element.image.includes(this.apiEnpoint ) ? element.image: this.apiEnpoint + element.image;    })
  }


  previous() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.getPaginatedData(this.pageNumber);
    }

  }

  next() {
    if (this.pageNumber < this.noOfPage.length) {
      this.pageNumber = this.pageNumber + 1
      this.getPaginatedData(this.pageNumber);
    }
  }


  search(value:any
    ){
    this.books=this.response.filter( (res:any) => res.bookName.toLowerCase().includes(value.toLowerCase()) || res.category.toLowerCase().includes(value));
    this.books.forEach((element:any)=>{
      element.image= element.image.includes(this.apiEnpoint ) ? element.image: this.apiEnpoint + element.image;    })
  }



  initialloginform(){
    this.addNewBooks = this.fb.group({
      bookName:['',[Validators.required]],
      pricing:['',[Validators.required]],
      category:['',[Validators.required]],
      attachment:['',[Validators.required]],
    })
  }



  addNew(){
    var postBody = new FormData();
    postBody.append('bookName',this.addNewBooks.controls['bookName']?.value)
    postBody.append('pricing',this.addNewBooks.controls['pricing']?.value)
    postBody.append('category',this.addNewBooks.controls['category']?.value)
    postBody.append('attachment', this.selectedImage)

    this.list.addNew(postBody).subscribe((res:any)=>{
      this.users = res
      console.log(res)
    })
  }

  update(){
    var Body = new FormData();
    Body.append('bookName',this.addNewBooks.controls['bookName']?.value)
    Body.append('pricing',this.addNewBooks.controls['pricing']?.value)
    Body.append('category',this.addNewBooks.controls['category']?.value)
    Body.append('attachment', this.selectedImage)
    Body.append('_id',this.selectedId)

    this.list.update(Body).subscribe((res:any)=>{
      this.users = res
      console.log(res) 
    })
  }

  delete(){
    this.list.delete(this.selectedId).subscribe((res:any)=>{
      this.users = res
      console.log(res)

    })
  }

  setSelected(id:any){
    this.selectedId=id
  }


  public get bookName() : any {
    return this.addNewBooks.get('bookName')
  }
  public get pricing() : any {
    return this.addNewBooks.get('pricing')
  }
  public get category() : any {
    return this.addNewBooks.get('category')
  }
  public get attachment() : any {
    return this.addNewBooks.get('attachment')
  }

  onImageSelection(image:any){
    console.log(image)
    this.selectedImage=image.target.files[0];
  }



}
