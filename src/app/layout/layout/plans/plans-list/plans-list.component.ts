import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlansService } from 'src/app/Services/Plans/plans.service';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent {



  selectedPlanId:any
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
    {name:'Id',key:'planId',type:'number'},
    {name:'Name',key:'name',type:'string'},
    {name:'Price',key:'price',type:'number'},
    {name:'Duration(Month)',key:'duration',type:'number'},
    {name:'Books',key:'books',type:'object'},
  ];


  constructor(private list:PlansService,private fb:FormBuilder){
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
      console.log(res)
    })
  }


  getPaginatedData(pageNumber:number){
    this.pageNumber = pageNumber;
    this.books = [...this.response.slice((pageNumber - 1)*10,pageNumber*10)]
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
    this.books=this.response.filter( (res:any) => res.name.toLowerCase().includes(value.toLowerCase()) || res.duration.toLowerCase().includes(value));
  }



  initialloginform(){
    this.addNewBooks = this.fb.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      duration:['',[Validators.required]],
      books:['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }



  addNew(){
   const body =  {
      name: this.addNewBooks.value.name,
      price:this.addNewBooks.value.price,
      duration: this.addNewBooks.value.duration,
      books:this.addNewBooks.value.books,
      description: this.addNewBooks.value.description,
      _id:this.selectedId
    }
    this.list.addNew(body).subscribe((res:any)=>{
      this.users = res
      console.log(res)
    })
  }

  update(){
    var Body = new FormData();
    Body.append('name',this.addNewBooks.controls['name']?.value)
    Body.append('price',this.addNewBooks.controls['price']?.value)
    Body.append('duration',this.addNewBooks.controls['duration']?.value)
    Body.append('books',this.addNewBooks.controls['books']?.value)
    Body.append('description',this.addNewBooks.controls['description']?.value)
    Body.append('_id',this.selectedId)
    Body.append('planId',this.selectedPlanId)

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


  public get name() : any {
    return this.addNewBooks.get('name')
  }
  public get duration() : any {
    return this.addNewBooks.get('duration')
  }
  public get Book() : any {
    return this.addNewBooks.get('books')
  }
  public get price() : any {
    return this.addNewBooks.get('price')
  }
  public get description() : any {
    return this.addNewBooks.get('description')
  }
  public get id():any{
    return this.addNewBooks.get('_id')
  }

  onImageSelection(image:any){
    console.log(image)
    this.selectedImage=image.target.files[0];
  }

}
