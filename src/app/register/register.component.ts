import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray} from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import { ValidateItems } from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private authService:AuthServiceService) { 
      
    }
  items:FormArray;
  formData:FormGroup;
  ngOnInit(): void {
    this.formData = this.fb.group({
      email:[''],
      password:['']
    });  
  }

  emailLogin(){
    var value = this.authService.emailLogin(this.formData)
     console.log(value);   
  }
  
  googlelogin(){
    this.authService.googlelogin();
  }
}
