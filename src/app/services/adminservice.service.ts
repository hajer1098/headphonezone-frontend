import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Category } from '../models/Category';


  const  BASE_URL='localhost://8091';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  constructor(private http:HttpClient ){}

  //-------------category service-----------------------------------

    addCategory(categoryDto:any):Observable<any>{

       return this.http.post(BASE_URL +'/categories/create',categoryDto);
    }

    getAllCategories():Observable<any>{
     return this.http.get(BASE_URL+'/categories')
    }

    deleteCategory(id:any):Observable<any>{
      return this.http.delete(BASE_URL+'deletecategory/${id}')
    }
    updateCategory(id: any, categoryDto: any): Observable<any> {
      return this.http.put(BASE_URL+'/admin/editcategory',categoryDto)
    }

     //------------- product service -----------------------------------

     addProduct(productDto:any):Observable<any>{

      return this.http.post(BASE_URL +'/products/create',productDto);
   }

     getAllproducts():Observable<any>{
    return this.http.get(BASE_URL+'/products')
   }
  //------------missing get product by name

  
}
