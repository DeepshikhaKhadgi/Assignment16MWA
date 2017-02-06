import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { }
  
  getData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1').map(res=>res.json());

  }

getUserPost() {
  	let url = 'http://jsonplaceholder.typicode.com/posts?userId=1';
  	return this.http.get(url).map(res => res.json());
  }
  
}
