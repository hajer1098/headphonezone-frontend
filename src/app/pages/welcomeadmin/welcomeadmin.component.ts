import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { UserService } from 'src/app/swagger/services/services/user.service';

@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrls: ['./welcomeadmin.component.scss']
})
export class WelcomeadminComponent implements OnInit {

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
