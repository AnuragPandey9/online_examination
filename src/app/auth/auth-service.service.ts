import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

interface Token{
    auth:string;
    token:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user$: Observable<firebase.User>;
  url:string = 'localhost:5000/logIn';

  constructor(private afAuth:AngularFireAuth,private http$:HttpClient) {
    this.user$ = this.afAuth.authState;
   }
 
  logOut(){
    this.afAuth.auth.signOut();
  }
 
  public setToken(token){
     localStorage.setItem('token',token);
  }

  emailLogin(body){
     this.http$.post(this.url,body)
         .subscribe(
           (data:Token)=>{
              if(data.auth ==='false')
                return data;
              else{
                localStorage.setItem('token', data.token);
                return null
              }
            }
           
         )
  }

  googlelogin(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then(value=>console.log(value))
    .catch(error=>console.log(error));
  }

  public getToken():string{
      return localStorage.getItem('token');
  }

  public isAuthenticated():boolean{
    const token = this.getToken();
    return tokenNotExpired(null,token);
  }

}
