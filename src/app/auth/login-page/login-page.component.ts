import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/Services/LaginPage/login-page.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  loginForm! : FormGroup
  users:any;
  emailid='praveen@gmail.com'
  pass=12345;



  constructor(private fb:FormBuilder, private loginPage: LoginPageService,private router:Router,){
    this.initialLoginForm();


  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  initialLoginForm(){
    this.loginForm=this.fb.group({
      email: ['',[Validators.required]],
      password:['',[Validators.required]]
    })

  }


  submit(){
    const body =  {
      email: this.loginForm.value.email,
      password:this.loginForm.value.password
    }

    this.loginPage.login(body).subscribe((res:any)=>{
      this.users = res
      console.log(res)

      localStorage.setItem('token',res.token)
      this.router.navigate(['login'])
    })

  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public get email() : any {
    return this.loginForm.get('email')
  }
  public get password() : any {
    return this.loginForm.get('password')
  }

  if (email=this.emailid) {
    alert('done')
  }

}
