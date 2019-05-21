import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import { CustomValidator } from '../../../Validators/CustomerValidators';
import { DataService } from '../../../Services/Data.Service';
import { Ui } from '../../../Utils/Ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  providers: [Ui,DataService]
})
export class SignupPageComponent implements OnInit {

  public form: FormGroup;
  public errors:any[] = [];
  constructor(private fb: FormBuilder, private dataService: DataService,private route:Router) {
    this.form = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      document: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.required
      ])],
      userName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      confirmPassword: ['',Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
    });
  }

  ngOnInit() {
  }

  submit(){
    this.dataService.createUser(this.form.value).subscribe(result=>{
      if(result.success == true){
        alert('Bem vindo');
      this.route.navigateByUrl('/');
      }
      else{
        console.log(result.data);
        alert(result.data[0].message);
      }
      
    },error=>{
      this.errors = JSON.parse(error._body).errors;
    });
  }

}
