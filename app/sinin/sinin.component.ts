import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sinin',
  templateUrl: './sinin.component.html',
  styleUrls: ['./sinin.component.scss']
})
export class SininComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   name=new FormControl('');
   password=new FormControl('');
      updateName(){
        this.name.setValue("Sharadha");
        this.password.setValue("123456")
       }


}
