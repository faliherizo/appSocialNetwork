import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creditentials: any;
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.creditentials = {
      login: '',
      password: ''
    };
    this.message = '';
  }

  onSubmit() {
    this.authService.login(this.creditentials)
      .subscribe(() => {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([redirect]);
      }, error => this.message = error);
  }
}