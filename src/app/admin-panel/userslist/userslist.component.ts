import { Component, OnInit } from '@angular/core';
import { findAll } from 'src/app/swagger/services/fn/user/find-all';
import { UserDto } from 'src/app/swagger/services/models/user-dto';
import { UserService } from 'src/app/swagger/services/services/user.service';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  
  msg:string=" No users founded"
  
  users: Array<UserDto> = [];
  userIdToDelete: any = -1;
  currentPage: number = 2;
  itemsPerPage: number = 3;
  pagedUsers: any[] = [];
  
  constructor(
    private userService: UserService,
    
  ) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  private findAllUsers() {
    this.userService.findAll()
    .subscribe({
      next: (value) => {
        this.users = value;
        this.updatePagedUsers();
      }
    });
  }
 
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


  updatePagedUsers(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedUsers = this.users.slice(start, end);
  }



  delete() {
    if(this.userIdToDelete) {
      this.userService.delete({
        'user-id': this.userIdToDelete
      }).subscribe({
        next: () => {
          this.findAllUsers();
        }
      });
    }

  }
  exportasCsv(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'List users',
      useBom: true,
      headers: ["id","email","firstname","lastname","password", "active","adresse"]
     
    }
    //  
    new ngxCsv(this.users, "usersListCSV",options);
    };

    // id?: number;
    // email: string;
    // firstname: string;
    // lastname: string;
    // password?: string;
    // active?: boolean;
    // adresse?: string;
     

  }
  
  



