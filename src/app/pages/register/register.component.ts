import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/swagger/services/models/authentication-response';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { AuthenticationService } from 'src/app/swagger/services/services/authentication.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userDto: UserDto = {email: '', firstname: '', lastname: '', password: ''};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
   
  ) {
  }

  ngOnInit(): void {
    localStorage.clear()
  }

  async login() {
    await this.router.navigate(['login']);
  }

  register() {
    this.errorMessages = [];
    this.authService.register({
        body: this.userDto
      }
    ).subscribe({
      next: async (data:AuthenticationResponse) => {
        await this.router.navigate(['confirm']);
      },
      error: (err) => {
        console.log(err)
        this.errorMessages = err.error.validationErrors;
      }
    });
  }

}

