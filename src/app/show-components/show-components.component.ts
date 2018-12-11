import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux,select } from 'ng2-redux';


@Component({
  selector: 'app-show-components',
  templateUrl: './show-components.component.html',
  styleUrls: ['./show-components.component.css']
})
export class ShowComponentsComponent {

  subjects:any;
  constructor(private ngRedux:NgRedux<IAppState>){  
    this.ngRedux.subscribe(() => {
       this.subjects = this.ngRedux.getState().subjects[0];
    })   
  }  

 ngAfterViewInit(){
  }
}
