import { Component } from '@angular/core';
import { EmployeeUtilService } from './employee-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-demo';
  empId: Number = 0;
  emp: EmployeeUtilService = <any>null;
  constructor(empUtil: EmployeeUtilService){
    this.emp = empUtil;
  }

  generate(){
    this.empId = this.emp.generateEmployeeId();
  }


}
