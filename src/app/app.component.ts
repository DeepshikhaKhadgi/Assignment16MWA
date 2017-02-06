import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";

import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  

  constructor(fb: FormBuilder, private userSrvc: DataService) {
    this.myForm = fb.group({
      'name1': ['', Validators.required],
      'email': ['deepshikhakhadgi@gmail.com', Validators.minLength(10)],
      'post': ['']
    });


  }


  onSubmit(): void {
    console.log(this.myForm.value);
  }

  getData() {
    console.log('getting data');

    Observable.forkJoin([this.userSrvc.getData(), this.userSrvc.getUserPost()]).subscribe(results => {
      console.log(results);
      console.log(this.myForm);
      let user = {
        name: results[0].name,
        email: results[0].email,
        post: results[1][0].body
      };
      this.myForm.patchValue(user);
    });

  }
}
