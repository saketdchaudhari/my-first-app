import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;

  serverCreationStatus:string = 'Server {{serverStatus}}!';
  serverName:any = 'Text';
  serverCreated:boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClick() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server {{serverStatus}}!';
  }

  onServerNameUpdate(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
