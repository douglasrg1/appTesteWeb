import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../../Services/Data.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.form = this.fb.group({
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
    });
    const token = localStorage.getItem('appTeste.Token');
    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() { }

  submit() {
    this.dataService.authenticate(this.form.value).subscribe(result => {
      if (result.token) {
        localStorage.setItem('appTeste.Token', result.token);
        localStorage.setItem('appTeste.User', result.users.name);
        this.router.navigateByUrl('/home');
      }
      else {
        alert(result.message);
      }


    }, error => {
      console.log(error);
    });
  }


}
