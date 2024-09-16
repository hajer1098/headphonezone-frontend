import { Component, OnInit } from '@angular/core';
import { ChangePasswordRequest } from 'src/app/swagger/services/models/changepassword-request';
import { UserService } from 'src/app/swagger/services/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
 
  
  request:ChangePasswordRequest={
    currentPassword:'',
    newPassword:'',
    confirmPassword:''
  }
  successMsg=""
  errorMessages: Array<string> = [];
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  changePassword(){
    this.errorMessages = [];
    this.service.changepassword(this.request).subscribe({
      next: () => {
        this.successMsg = 'Your password has been successfully updated';
      },
      error:(err:any)=>{
       console.log(err)
       this.errorMessages.push(err.error.errorMessage);
      // this.errorMessages = err.error.validationErrors;
      }

    })
   
  }

    
  }


