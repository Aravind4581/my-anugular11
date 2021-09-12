import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
userName: string ='';
disableUser: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  updateUserName(event: Event){
    this.userName=(<HTMLInputElement>event.target).value;
    if(this.userName!=''){
      this.disableUser=false;
    }else{
      this.disableUser=true;
    }
  }

  onClick(){
this.userName='';
  }

}
