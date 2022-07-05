import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

interface DataForCheckBox{
 name: string,
 value: string,
 checked: boolean
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hobbies: Array<DataForCheckBox> = [
    {name: "playing", value:"playing", checked:false},
    {name: "reading", value:"reading", checked:false},
    {name: "sleeping", value:"sleeping", checked:false}
  ]
  formControls: Array<FormControl> = this.populateFormArray();
  constructor() { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    hobbies: new FormArray(this.formControls)
  });

  populateFormArray(){
    let formsControls: Array<FormControl> = [];
    for(let hobby of this.hobbies){
      formsControls.push(new FormControl(hobby.checked));
    }
    return formsControls;
  }

  ngOnInit(): void {
  }

}
