import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { UserService } from 'src/app/swagger/services/services/user.service';






@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  userDto:UserDto={
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    adresse:''
  }
  errorMessages: Array<string> = [];
  constructor(
    private userService :UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  save(){
    this.errorMessages = [];
    this.userService.save(
      {body:this.userDto}
    ).subscribe({
      next:async(data)=>{

        console.log(data);
       await this.router.navigate(['admin/users']);
       

      }, 
      error:(err:any)=>{
       console.log(err)
       this.errorMessages = err.error.validationErrors;
      }
      
  })

}
}
