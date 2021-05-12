import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //backEnd e istekte bulunmak için.
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:10936/api/';

  constructor(private httpClient:HttpClient) { } //bir component HTTpClient kullanmaz.

  getProducts():Observable<ListResponseModel<Product>>
  {
    let newPath =this.apiUrl + 'products/getall'
   return this.httpClient.get<ListResponseModel<Product>>(newPath) //gelen data P.ResponseModel, postman'deki işlem.

  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl + "products/getbycategory?categoryId="+categoryId
   return this.httpClient.get<ListResponseModel<Product>>(newPath) //gelen data P.ResponseModel, postman'deki işlem.

  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
