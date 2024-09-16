import { Component, OnInit } from '@angular/core';
import { CategoryDto } from '../../models/Category';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {

  categorIdToEdit :any;
  categoryDto:CategoryDto = {
    name: '',
    description: '',
  
  };

  constructor( private service :AdminserviceService) { }

  ngOnInit(): void {

  }
  edit (categorIdToEdit:any){
  this

  }


}
