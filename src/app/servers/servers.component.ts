import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer: boolean= true;
serverName: string='';
serverCreationStatus:string='No Server is created yet';
  constructor() { 
  }

  onClick(){
    this.serverCreationStatus="Server was created! and name is "+this.serverName;
  }
  onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }

}
