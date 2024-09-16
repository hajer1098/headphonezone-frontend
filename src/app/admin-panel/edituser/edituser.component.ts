import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { UserService } from 'src/app/swagger/services/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  userDto: UserDto = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    adresse:''
  };


  successMsg = '';

  constructor(
    private userService: UserService,
    private helperService: HelperService,
    private activatedRoute:ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.userService.findById({
      'user-id': this.activatedRoute.snapshot.params["id"]
    }).subscribe({
      next: (data) => {
        this.userDto = data;
      }
    });
  }
  EditUser(userId: number|undefined): void {
    this.userService.updateUser(userId as number, this.userDto).subscribe(result => {
      this.router.navigate(['/admin/users']);
    });
  }

  edit() {
    this.successMsg = '';
   
    this.userService.save({
      body: this.userDto
    }).subscribe({
      next: () => {
        this.successMsg = 'User has been successfully updated';
      }
    });
  }


}
