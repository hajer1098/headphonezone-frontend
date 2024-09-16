import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {


  productForm!: FormGroup;

  listCategories!:any[];

  selectedFile !:File |null;
  imagePreview!:string |ArrayBuffer |null;

  constructor(private service: AdminserviceService , private router:Router,private fb: FormBuilder) { }



  onFileSelected(event: any) {
    this.selectedFile=event.target.files[0];
    this.previewImage();
    }
  previewImage() {
   const reader =new FileReader();
   reader.onload=()=>{
    this.imagePreview=reader.result
   }
   reader.readAsDataURL(this.selectedFile)

  }
  ngOnInit(): void {
    this.productForm=this.fb.group({
      CategoryId :[null,[Validators.required]],
      name :[null,[Validators.required]],
      description :[null,[Validators.required]],
      price :[null,[Validators.required]],
  });
  this.getAllCategories();
  }
  
 getAllCategories(){
    this.service.getAllCategories().subscribe(res=>{
      this.listCategories=res;
    })
  }


  save(){
    if(this.productForm.valid){
      const formData :FormData =new FormData();
      formData.append('img',this.selectedFile);
      formData.append('categoryId',this.productForm.get('categoryId')?.value);
      formData.append('name',this.productForm.get('name')?.value);
      formData.append('description',this.productForm.get('description')?.value);
    this.service.addCategory(formData).subscribe({
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

}
