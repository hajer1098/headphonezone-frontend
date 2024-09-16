import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


   cartItems:any[]=[]
   order:any
  constructor(private cartService: CartService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCartItemsByUser();
  }
  getCartItemsByUser(){
    this.cartItems=[]
    this.cartService.getCartByUserId().subscribe(res=>{
      this.order=res;
      this.cartItems.forEach(element=>{
        element.processedImg='data:image/jpeg;base64,'+element.byteImg;
      })
    })
  }

}
