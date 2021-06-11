import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentObserver } from '@angular/cdk/observers';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users:any;
  gridColumns = 3;

  constructor(public appService: appService){}
  
  
  ngOnInit() {
    this.listenApi()
  }

  listenApi(){
    this.appService.getUsers().subscribe(data =>{
      this.users = data
    });
  }
  
}
