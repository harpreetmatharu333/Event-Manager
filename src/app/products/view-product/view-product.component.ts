import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { name } from '../name';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID=0
  productDetails!: Product;
  Count=0;
  Count1=0;
  nameId=0;
  Name!:any;
  promptName:any;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id'];
    })

    this.productService.viewProduct(this.productID).subscribe(viewData=>{
      this.productDetails=viewData;
    })
    this.productService.getName().subscribe(viewData=>{
      this.Name=viewData;
    })
  }
  interested(){
    this.Count++;
    this.activatedRoute.params.subscribe(data=>{
      this.nameId=data['id'];
      
    })
    // this.promptName=prompt("Enter Your Name")
    // console.log(this.promptName);
    // let addName={
    //   Name:this.promptName.value
    // }

}
addName(){
  this.router.navigate(['products/add-name']);
}


  
  



}
