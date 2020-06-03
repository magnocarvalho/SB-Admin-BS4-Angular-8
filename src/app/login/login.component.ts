import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.email
    ]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  constructor(public router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  onLoggedin() {
    // localStorage.setItem('isLoggedin', 'true');

    if (this.profileForm.valid) {
      if (this.profileForm.value.email == 'poletize@gmail.com') {
        if (this.profileForm.value.senha == 'segredosegredo') {
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['dashboard']);
        } else {
          this.toastr.error('Senha Invalida');
        }
      } else {
        this.toastr.error('Email Invalido');
      }
    } else {
      this.toastr.error('Dados Invalidos');
    }
  }
}
