import { Component, OnInit } from '@angular/core';

interface Data {
  name: string;
  value: string;
}

interface DataForCheckBox {
  name: string;
  value: string;
  checked: boolean;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  statesData: Array<Data> = [
  
    {name:"--Please Select--", value: 'NA'}, 
  
  {name:"Andhra Pradesh", value: 'AP'},
  
  {name:"Telangana", value: 'TS'}
];

hobbies: Array<DataForCheckBox> = [
  {name: "playing", value:"playing", checked:false},
  {name: "reading", value:"reading", checked:false},
  {name: "sleeping", value:"sleeping", checked:false}
]

  userData: {name: string, password: string, state: string, gender: string, address: string} = {
    name: '',
    password: '',
    state: 'NA',
    gender: '',
    address: ''
  };
  name: string = 'Hello';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  doWork(): void{
    alert(this.name);
  }

}
