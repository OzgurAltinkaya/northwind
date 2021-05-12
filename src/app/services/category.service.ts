import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //backEnd e istekte bulunmak için.
import { Observable } from 'rxjs';

import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:10936/api/categories/getall'

  constructor(private httpClient:HttpClient) { } //bir component HTTpClient kullanmaz.

  getCategories():Observable<ListResponseModel<Category>>
  {
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl) //gelen data P.ResponseModel, postman'deki işlem.

  }
}
