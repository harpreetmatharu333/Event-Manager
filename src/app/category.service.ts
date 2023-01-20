import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getCategory(){
    const categoryUrl="http://localhost:3000/event-list";
    return this.httpClient.get<Category>(categoryUrl)
  }
}
