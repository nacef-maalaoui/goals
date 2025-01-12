import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://127.0.0.1:3000/goal/'

  constructor(private http : HttpClient) { }

  create(goal : any){
    return this.http.post(this.url + 'add', goal);
  }

  todo(){
    return this.http.get(this.url + 'todo');
  }

  all(id : any){
    return this.http.get(this.url + 'byid/' + id);
  }

  supp(id : any){
    return this.http.delete(this.url + 'delete/' + id);
  }

  update(id : any , goal : any){
    return this.http.put(this.url + 'update/' + id , goal);
  }
}
