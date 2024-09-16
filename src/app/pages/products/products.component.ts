import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products :any[]=[]
  constructor( private service:AdminserviceService,
               private cartService:CartService,
               private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.service.getAllproducts().subscribe((res)=>{
      res.array.forEach(element => {
        element.processedImg='data:image/jpeg;base64,'+element.byteImg;
        this.products.push(element)
      });
       
        

    })
  }
  addToCart(productid:any){

    this.cartService.addToCart(productid).subscribe(res=>{
      console.log("product added successfuly to cart")
      this.router.navigate(['cart']);

    })

  }

}
