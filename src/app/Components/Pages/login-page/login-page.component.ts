import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator} from '../../../Validators/CustomerValidators';
import {DataService} from '../../../Services/Data.Service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['',Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
    });
  }

  ngOnInit() {}
  
  checkEmail(){
      
    console.log(this.form.controls['email'].value);
  }

  submit(){
    this.dataService.createUser(this.form.value);
  }
  

}
