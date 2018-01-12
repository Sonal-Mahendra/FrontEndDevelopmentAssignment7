import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-binding',
  templateUrl: './app-binding.component.html',
  styleUrls: ['./app-binding.component.css']
})
export class AppBindingComponent implements OnInit {

title="";
name="";
lastname="";
isVisible=true;

  constructor() { 

  }
 
  toggleTitle(e,t)
  {
    e.preventDefault();
    
    this.title=t.value;
  this.isVisible=!this.isVisible;
   }
ngOnInit() {
  }

}
