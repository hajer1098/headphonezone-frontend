import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { UserDto } from 'src/app/swagger/services/models';
import { UserService } from 'src/app/swagger/services/services/user.service';


@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.scss']
})
export class WelcomeuserComponent implements OnInit {
  
  userDto: UserDto = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  constructor(
    private userService: UserService,
    private helperService: HelperService
  ) { }



  ngOnInit(): void {
    this.userService.findById({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.userDto = data;
      }
    });
  }

}
