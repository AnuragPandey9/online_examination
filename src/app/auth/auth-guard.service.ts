import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router'; 
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthServiceService,private router:Router) { }

  canActivate(){
    return this.auth.user$.map(user =>{
        if(user) return true;
        this.router.navigate(['/Sign In']);
        return false;
    })

  }
}
