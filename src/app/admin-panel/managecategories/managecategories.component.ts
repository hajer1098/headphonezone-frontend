import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'src/app/models/CategoryDto';
import { AdminserviceService } from './../../services/adminservice.service';

@Component({
  selector: 'app-managecategories',
  templateUrl: './managecategories.component.html',
  styleUrls: ['./managecategories.component.scss']
})
export class ManagecategoriesComponent implements OnInit {
  categories:Array<CategoryDto>=[]

  categoryIdToDelete: any = -1;

  constructor(private service:AdminserviceService) {  }

  ngOnInit(): void {
    this.FindAllCategories()
  }
  FindAllCategories(){
    this.service.getAllCategories().subscribe({next:(value:CategoryDto[]) =>{
      this.categories=value;
    }
    })
  }

  delete() {
    if(this.categoryIdToDelete) {
      this.service.deleteCategory({
        'category.id': this.categoryIdToDelete
      }).subscribe({
        next: () => {
          this.FindAllCategories();
        }
      });
    }
}
}
