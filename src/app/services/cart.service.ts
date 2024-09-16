import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from './helpers/helper.service';
import { UserService } from '../swagger/services/services';

const  BASE_URL='localhost://8081';

@Injectable({
  providedIn: 'root'
})


export class CartService {

 

  constructor(private http:HttpClient,  private userService: UserService,
    private helperService: HelperService) { }

  addToCart(productId: any): Observable<any> {
    const cartDto={
      productId:productId,
      userId:  this.userService.findById({
        'user-id': this.helperService.userId
      })
    }
    return this.http.post(BASE_URL +'/carts',cartDto);
  }

  getCartByUserId(): Observable<any> {
    
      userId:  this.userService.findById({
        'user-id': this.helperService.userId
      })
    
    return this.http.get(BASE_URL +'/carts/{userId}');
  }






 




}
