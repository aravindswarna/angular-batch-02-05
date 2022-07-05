import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUtilService {

  constructor() { }

generateEmployeeId(){
    let id = Math.round(Math.random()* 100000);
    return id;
  }

}
