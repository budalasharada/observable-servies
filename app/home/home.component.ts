import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public result;
    myimages:string="/assets/images/chinni.jpg";
  constructor(private _demoservice:ServicesService) { }

  ngOnInit() {
    this._demoservice.getDetails().subscribe(demo=>this.result=demo);
  }

}
