import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  public data:Array<any> = [];

  constructor(private DataService:DataService){
    this.DataService.getData().subscribe((resp:any) =>{
      this.data = resp.data;
    });
    
  }

}

