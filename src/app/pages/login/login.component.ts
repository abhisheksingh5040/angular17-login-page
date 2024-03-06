import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   isSignDivVisiable: boolean = true;

   signUpObj: SignUpModel = new SignUpModel();
   loginObj: LoginModel = new LoginModel();

   constructor(private router:Router){ }

   onRegister(){
    debugger;
    const localUser = localStorage.getItem("angular17users");
    if(localUser != null){
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem("angular17users",JSON.stringify(users));
    }else{
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem("angular17users",JSON.stringify(users));
    }
    alert("User Registered!!!!");
   }


   onLogin(){
    debugger;
    const localUser = localStorage.getItem("angular17users");

    if(localUser!= null){
      const users = JSON.parse(localUser);
     const isUserPresent =  users.find((user:SignUpModel)=>user.email===this.loginObj.email && user.password ===this.loginObj.password);
      if(isUserPresent != undefined){
        localStorage.setItem("loggedUser",JSON.stringify(isUserPresent));
        this.router.navigate(['/dashboard'], { queryParams: { isUserPresent: SignUpModel } });
      }else{
        alert("Invalid User!!!!");
      }̥
    }else{
      alert("Invalid User");
    }
   }

}

export class SignUpModel{
    name: string;
    email: string;
    password: string;

    constructor(){
      this.name = '';
      this.email = '';
      this.password = '';
    }
}

export class LoginModel{
  email: string;
  password: string;

  constructor(){
    this.email = '';
    this.password = '';
  }
}
