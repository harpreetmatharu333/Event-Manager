import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './side-bar/category';
import {Product} from './event'
import {Name} from './name';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any):Observable<Product>{ 
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product> (baseUrl,productBody);
  }
  viewProduct(categoryId:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }
  deleteProduct(productID:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productID;
    return this.httpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(category:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product?categoryId=" +category;
    return this.httpClient.get<Product>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl)
  }
  getProduct():Observable<Product>{
    const baseUrl ="http://localhost:3000/product/";
    return this.httpClient.get<Product>(baseUrl);
  }
  getName():Observable<Name>{
    const baseUrl ="http://localhost:3000/Name/";
    return this.httpClient.get<Name>(baseUrl);
  }
  setName(promptName: any):Observable<Name>{ 
    const baseUrl="http://localhost:3000/Name";
    return this.httpClient.post<Name>(baseUrl,promptName);
  }
  

}
