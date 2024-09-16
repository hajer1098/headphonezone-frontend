import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from './../../services/adminservice.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  categoryDto:Category={
    name: '',
    description: ''

  }

  constructor(private service: AdminserviceService , private router:Router) { }

  ngOnInit(): void {
  }

   save(){
   this.service.addCategory(
    {body:this.categoryDto}
  ).subscribe({
    next:async(data)=>{

      console.log(data);
     await this.router.navigate(['admin/categories']);
    
    }, 
    error:(err:any)=>{
     console.log(err)
    
    }
    
  })
}

}
