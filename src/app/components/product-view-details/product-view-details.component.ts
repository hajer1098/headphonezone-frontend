import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss']
})
export class ProductViewDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,private CartService:CartService, private router:Router) {

      activatedRoute.params.subscribe((params)=>{

  return this.food = productService.getFoodById(params['id']);
  
    })
    

}
}
