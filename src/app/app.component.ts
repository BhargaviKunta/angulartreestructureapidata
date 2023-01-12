import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  data:any;
  constructor(private apidata:ApiserviceService)
  {

  }
  ngOnInit(){
    this.apidata.getData().subscribe(r=>{this.data=r});
  }

}
