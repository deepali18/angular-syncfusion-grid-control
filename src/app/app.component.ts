import { Component,OnInit, VERSION } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class  AppComponent implements OnInit    {
  name = 'Angular ' + VERSION.major;
  public data: object[];
  
    ngOnInit(): void {
      this.data= data;
    }
}
