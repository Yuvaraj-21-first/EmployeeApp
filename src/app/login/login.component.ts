import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    Email:new FormControl('',Validators.required),
    Password : new FormControl('')

  });
  
 
    
  onSubmit() :void{
    console.log(this.loginForm.value);
    console.log(this.loginForm.errors);   
    
    
  }

}
