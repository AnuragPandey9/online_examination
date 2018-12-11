import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';


@Component({  
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {


  constructor(private authService:AuthServiceService) {
    
   }

   logOut(){
     this.authService.logOut();
   }

}
