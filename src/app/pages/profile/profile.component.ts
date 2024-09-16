import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers/helper.service';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { UserService } from 'src/app/swagger/services/services/user.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userDto: UserDto = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    adresse:''
  };

  successMsg = '';
  errorMessages: Array<string> = [];

  constructor(
    private userService: UserService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.errorMessages=[]
    this.userService.findById({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.userDto = data;
      }, 
      error:(err:any)=>{
       console.log(err)
       this.errorMessages = err.error.validationErrors;
      }
    }
  )
    
  }

  

  save() {
    this.successMsg = '';
    this.userDto.id = this.helperService.userId;
    this.userService.save({
      body: this.userDto
    }).subscribe({
      next: () => {
        this.successMsg = 'Your profile has been successfully updated';
      }
    });
  }

  edit(userId: number|undefined): void {
    this.userService.updateUser(userId as number, this.userDto).subscribe({
      next: () => {
        this.successMsg = 'Your profile has been successfully updated';
      }

    });
  }
  

}
