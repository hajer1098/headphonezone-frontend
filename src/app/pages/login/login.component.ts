import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationRequest } from 'src/app/swagger/services/models/authentication-request';
import { AuthenticationService } from 'src/app/swagger/services/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authReq:AuthenticationRequest= {}
  errorMessages:Array<string> =[]
  constructor(private router:Router,
    private authService:AuthenticationService
  ) { }

  ngOnInit(): void {
    localStorage.clear()
  }


  login(){
    this.errorMessages=[]
    this.authService.authenticate({body:this.authReq}).subscribe({
      next: async (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
  
        const decodedToken = helper.decodeToken(data.token as string);
        if (decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
          await this.router.navigate(['admin/']);
        } else {
          await this.router.navigate(['user/']);
        }
        console.log("login successfully")
       
      },
      error: (err) => {
        console.log("login error");

      this.errorMessages.push(err.error.errorMessage);
      
        
      }
    });
  }
}
