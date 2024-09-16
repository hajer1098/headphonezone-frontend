import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss']
})
export class ManageproductsComponent implements OnInit {

  
  products :any[]=[]
  constructor( private service:AdminserviceService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.service.getAllproducts().subscribe((res)=>{
      res.map(element => {
        element.processedImg='data:image/jpeg;base64,'+element.byteImg;
        this.products.push(element)
        
      });
    })
  }

  addToCart(prodcutId:any){
    
  }

}
